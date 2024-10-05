import React from "react";

const Contact = () => {
    return (
        <section id="contact" class=" container px-5 pt-14 pb-20 mx-auto">
        <div class="flex items-center justify-start bg-white">
            <div class="mx-auto w-full max-w-lg">
                <h1 class="text-4xl font-medium">Contact us</h1>
                <p class="mt-3">Email us at khanhledinh.work@gmail.com or message us here:</p>

                <form action="https://api.web3forms.com/submit" class="mt-10" method="POST">
                
                <input type="hidden" name="access_key" value="040756df-2009-485a-a171-baec5acf2f93" /> 
                <div class="grid gap-6 sm:grid-cols-2">
                    <div class="relative z-0">
                    <input type="text" name="name" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                    <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 flex justify-right w-full">Your name</label>
                    </div>
                    <div class="relative z-0">
                    <input type="text" name="email" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                    <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 flex justify-right w-full">Your email</label>
                    </div>
                    <div class="relative z-0 col-span-2">
                    <textarea name="message" rows="5" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
                    <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 flex justify-right w-full">Your message</label>
                    </div>
                </div>
                <button type="submit" class="mt-5 rounded-md bg-blue-800 px-10 py-2 text-white">Send Message</button>
                </form>
            </div>
        </div>
    </section>
    );
};

export default Contact;