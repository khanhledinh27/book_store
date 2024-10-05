import React from "react";

const About = () => {
    return (
        <section id="about" className="container px-5 pb-8 mx-auto">
            <h1 className="mb-12 text-center font-mono text-3xl font-light">About Us</h1>
            <div
                className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
                style={{
                    backgroundImage: `url('/Images/about.png')`,
                    height: '500px',
                    
                    backgroundPosition: 'center',
                }}
            >
                <div
                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    }}
                >
                    <div className="flex h-full items-center justify-center">
                        <div className="text-white">
                            <h2 className="mb-4 text-2xl md:text-4xl font-semibold pb-10 mx-5 md:mx-0">Welcome to Natasa: A Book Store</h2>
                            <h4 className="mb-6 text-lg md:text-xl font-semibold px-1 md:px-20 mx-5 md:mx-0">
                                At Natasa, we believe a book is more than just reading. It's about 
                                experiencing new knowledge, culture, making connections, and feeling like you belong. 
                                That's why we're sharing and believing in the power of books.
                            </h4>
                            <button
                                type="button"
                                className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-white hover:bg-opacity-10 hover:text-black focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                data-twe-ripple-init
                                data-twe-ripple-color="light"
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
