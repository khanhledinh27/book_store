import React, { useState, useEffect } from 'react';

const BookModal = ({ book, onClose }) => {
    const [quantity, setQuantity] = useState(1); // Default quantity to 1

    // Reset quantity when a new book is selected
    useEffect(() => {
        if (book) {
            setQuantity(1); // Reset quantity to 1 when the book changes
        }
    }, [book]);

    if (!book) return null;

    // Handle change from input field
    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value >= 0) { // Ensure valid and non-negative values
            setQuantity(value);
        }
    };

    // Handle increase quantity
    const incrementQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    // Handle decrease quantity
    const decrementQuantity = () => {
        setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0)); // Prevent negative quantity
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4 sm:p-8">
            <div className="max-w-full w-full sm:w-auto sm:max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg h-auto sm:h-auto">
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <div className="h-[300px] sm:h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                            <img className="w-full h-full object-cover" src={book.imgURL} alt={book.tensp} />
                        </div>
                    </div>
                    <div className="md:flex-1 px-4 mt-8">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2">{book.tensp}</h2>
                        <p className="text-gray-400 dark:text-gray-300 text-sm sm:text-base mb-4">{book.tacgia}</p>
                        <div>
                            <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-xl mt-2">{book.mota}</p>
                        </div>
                        <div className="flex my-6 sm:my-10 mt-8 justify-center">
                            <div className="py-2 px-3 mr-4 inline-block">
                                <span className="mr-2 font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                <span className="text-gray-600 text-lg sm:text-xl dark:text-gray-300">${book.gia}</span>
                            </div>
                            <div className="py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-700">
                                <div className="flex items-center gap-x-1.5">
                                    <button
                                        type="button"
                                        className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                                        tabIndex="-1"
                                        aria-label="Decrease"
                                        onClick={decrementQuantity}
                                    >
                                        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path clipRule="evenodd" d="M5 12h14"></path>
                                        </svg>
                                    </button>
                                    <input
                                        className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white"
                                        style={{ MozAppearance: 'textfield' }}
                                        type="number"
                                        aria-roledescription="Number field"
                                        value={quantity}
                                        onChange={handleQuantityChange}
                                    />
                                    <button
                                        type="button"
                                        className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                                        tabIndex="-1"
                                        aria-label="Increase"
                                        onClick={incrementQuantity}
                                    >
                                        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path clipRule="evenodd" d="M5 12h14"></path>
                                            <path clipRule="evenodd" d="M12 5v14"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex items-center mt-2">
                                <div className="w-1/2 px-2">
                                    <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                                </div>
                                <div className="w-1/2 px-2">
                                    <button onClick={onClose} className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BookModal;
