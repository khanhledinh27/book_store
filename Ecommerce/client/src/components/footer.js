import React from "react";

const Footer = () => {
    return (
        <section class="bg-white container px-5 pt-14 pb-20 mx-auto">
        <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
            <nav class="flex flex-wrap justify-center -mx-5 -my-2">
                <div class="px-5 py-2">
                    <a href="#home" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                        Home
                    </a>
                </div>
                <div class="px-5 py-2">
                    <a href="#book" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                        Books
                    </a>
                </div>
                <div class="px-5 py-2">
                    <a href="#about" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                        About
                    </a>
                </div>
                <div class="px-5 py-2">
                    <a href="#service" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                        Services
                    </a>
                </div>
                <div class="px-5 py-2">
                    <a href="#contact" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                        Contact
                    </a>
                </div>
            </nav>
            <div class="flex justify-center mt-8 space-x-6">
                <a 
                target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/tenchi.takumi/?locale=vi_VN" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Facebook</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                    </svg>
                </a>
                <a 
                target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/khánh-lê-đình-0738aa249/" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Linkedin</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M 6 3 C 4.3489059 3 3 4.3489059 3 6 L 3 18 C 3 19.651094 4.3489059 21 6 21 L 18 21 C 19.651094 21 21 19.651094 21 18 L 21 6 C 21 4.3489059 19.651094 3 18 3 L 6 3 z M 6 4 L 18 4 C 19.110906 4 20 4.8890941 20 6 L 20 18 C 20 19.110906 19.110906 20 18 20 L 6 20 C 4.8890941 20 4 19.110906 4 18 L 4 6 C 4 4.8890941 4.8890941 4 6 4 z M 8.1855469 6.7851562 C 7.4445469 6.7851563 7 7.2293594 7 7.8183594 C 7 8.4113594 7.444375 8.8574219 8.109375 8.8574219 C 8.850375 8.8574219 9.2910156 8.4113594 9.2910156 7.8183594 C 9.2910156 7.2303594 8.8505469 6.7851562 8.1855469 6.7851562 z M 7.0625 9.9628906 L 7.0625 16 L 9.2363281 16 L 9.2363281 9.9628906 L 7.0625 9.9628906 z M 11.033203 9.9628906 L 11.033203 16 L 13.207031 16 L 13.207031 12.697266 C 13.207031 11.718266 13.908141 11.574219 14.119141 11.574219 C 14.330141 11.574219 14.892578 11.785266 14.892578 12.697266 L 14.892578 16 L 17 16 L 17 12.697266 C 17 10.806266 16.154516 9.9628906 15.103516 9.9628906 C 14.052516 9.9628906 13.490031 10.312641 13.207031 10.806641 L 13.207031 9.9628906 L 11.033203 9.9628906 z"></path>
                    </svg>
                </a>
                <a target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/khanhledinh27" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">GitHub</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
            <p class="mt-8 text-base leading-6 text-center text-gray-400">
                © 2024 Natasa, Inc. All rights reserved.
            </p>
        </div>
    </section>
    );
};

export default Footer;