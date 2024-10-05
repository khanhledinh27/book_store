import React, { useEffect, useState } from 'react';
import BookModal from './bookPage';

const Book = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [visibleCount, setVisibleCount] = useState(6); // Limit visible books count == 6

    const handleProductClick = (book) => {
        setSelectedProduct(book);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('http://localhost:5000/books');
                if (!response.ok) {
                    throw new Error('Failed to fetch books');
                }
                const data = await response.json();
                setBooks(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + 6); // Load more books
    };

    const handleViewLess = () => {
        setVisibleCount(6); // Reset to the initial count
    };

    return (
        <div id="book" className="container px-5 py-8 mx-auto">
            <h1 className="mb-12 text-center md:text-left font-mono text-3xl font-light">Books</h1>
            <section
                id="Projects"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
            >
                {books.slice(0, visibleCount).map((book) => (
                    <div
                        key={book._id}
                        onClick={() => handleProductClick(book)}
                        className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
                    >
                        <a href="#home">
                            <img
                                src={book.imgURL}
                                alt={book.tensp}
                                className="h-80 w-72 object-cover rounded-t-xl"
                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150'; }} // Fallback if the image is broke
                            />
                            <div className="px-4 py-3 w-72">
                                <span className="text-gray-400 mr-3 uppercase text-xs">{book.mota}</span>
                                <p className="text-lg font-bold text-black truncate block capitalize">{book.tensp}</p>
                                <p className="text-base text-black truncate block">{book.tacgia}</p>
                                <div className="flex items-center">
                                    <p className="text-lg font-semibold text-black cursor-auto my-3">${book.gia}</p>
                                    <div className="ml-auto">
                                        <a href="#home">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="currentColor"
                                                className="bi bi-bag-plus"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                                                />
                                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </section>

            {/* View more and View Less Buttons */}
            <div className="text-center mt-6">
                {visibleCount < books.length ? (
                    <button
                        onClick={handleLoadMore}
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition mr-2"
                    >
                        View More
                    </button>
                ) : null}
                {visibleCount > 6 ? (
                    <button
                        onClick={handleViewLess}
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                    >
                        View Less
                    </button>
                ) : null}
            </div>

            <BookModal book={selectedProduct} onClose={handleCloseModal} />
        </div>
    );
};

export default Book;
