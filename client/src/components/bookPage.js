import React from 'react';

const BookModal = ({ book, onClose }) => {
    if (!book) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
                <div className='flex justify-end items-center mt-4'>
                    <button onClick={onClose} className="mt-4 bg-red-600 text-white p-2 rounded md:w-1/12 w-10 hover:bg-red-800 transition text-center">
                        X
                    </button>
                </div>

                <h2 className="text-center text-2xl font-bold mb-4">Book Details</h2>
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 md:flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                        <img
                            src={book.imgURL}
                            className="md:h-48 md:w-48 h-full w-full object-cover rounded-lg"
                            alt={book.tensp}
                        />
                    </div>
                    <div className="flex-grow">
                        <table className="table-auto w-full">
                            <tbody>
                                <tr className="py-4 text-left">
                                    <td className="font-semibold pr-4">Name:</td>
                                    <td>{book.tensp}</td>
                                </tr>
                                <tr className="py-4 text-left">
                                    <td className="font-semibold pr-4">Author:</td>
                                    <td>{book.tacgia}</td>
                                </tr>
                                <tr className="py-4 text-left">
                                    <td className="font-semibold pr-4">Description:</td>
                                    <td>{book.mota}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
               

                 <div className="flex items-center justify-end my-6 row-auto">
                    <p className="text-2xl font-semibold text-black">${book.gia}</p>
                    <div className="ml-2">
                        <a href="#home" aria-label="Add to cart">
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
        </div>
    );
};

export default BookModal;
