import React from "react";

const Service = () => {
    return (
        
    <section id="service" class="container px-5 py-8 mx-auto">
        <h1 class=" text-center md:text-left font-mono text-3xl font-light">Our Services</h1>
        <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-4 md:p-8">
       
            <div
                class="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-400 bg-opacity-50 shadow-2xl shadow-gray-600/10">
                <div class="space-y-12">
                    <div class="m-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
                        <span class="font-bold text-xl text-green-600">1</span>
                    </div>
                    <div class="space-y-4">
                        <h3 class="text-2xl font-semibold text-gray-800 transition">Books for Cash</h3>
                        <p class="text-gray-600">We buy used books from customers.
                            If you have books you no longer need, you can sell them to the Natasa for cash or store credit.
                        </p>
                    </div>
                </div>
            </div>

 
            <div
                class="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-400 bg-opacity-50 shadow-2xl shadow-gray-600/10">
                <div class="space-y-12">
                    <div class="m-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-50">
                        <span class="font-bold text-xl text-orange-600">2</span>
                    </div>
                    <div class="space-y-4">
                        <h3 class="text-2xl font-semibold text-gray-800 transition">Book Clubs</h3>
                        <p class="text-gray-600">We often organize book clubs where readers can discuss a selected book together. 
                            It's a great way to connect with other book lovers and explore different perspectives.</p>
                    </div>
                </div>
            </div>


            <div
                class="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-400 bg-opacity-50 shadow-2xl shadow-gray-600/10">
                <div class="space-y-12">
                    <div class="m-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-50">
                        <span class="font-bold text-xl text-purple-600">3</span>
                    </div>
                    <div class="space-y-4">
                        <h3 class="text-2xl font-semibold text-gray-800 transition">Book Repair Services</h3>
                        <p class="text-gray-600">We may offer book repair services for damaged books. This includes fixing torn pages,
                            re-binding, and restoring antique books.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    );
};

export default Service;