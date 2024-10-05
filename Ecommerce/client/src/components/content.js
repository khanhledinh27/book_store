import React from "react";
import background from "../Images/pic1.png";

const Content = () => {
    return (
        <section className="container px-5 pb-8 mx-auto">
            <div className="hero bg-gray-100 py-16">
                <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
                    <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        <div className="hero-text col-span-6 text-center md:text-left"> 
                            <h1 className="font-bold text-4xl md:text-5xl max-w-xl text-gray-900 leading-tight">
                                If you don't like to read, you haven't found the right book.
                            </h1>
                            <p className="text-gray-800 text-base leading-relaxed mt-8 font-semibold">
                                - J.K. Rowling -
                            </p>
                            <hr className="w-12 h-1 bg-orange-500 rounded-full mt-8" />
                            <p className="text-gray-800 text-base leading-relaxed mt-8 font-semibold">
                                The ultimate test of your knowledge is your capacity to convey it to another.
                            </p>
                        </div>

                        <div className="hero-image col-span-6">
                            <img src={background} alt="An inspiring scene related to reading" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Content;
