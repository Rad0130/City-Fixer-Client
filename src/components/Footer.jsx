import React from 'react';

const Footer = () => {
    return (
        <footer class="bg-gray-900 text-white pt-12 pb-8">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                {/* <!-- Logo and Description --> */}
                <div>
                    <div class="flex items-center mb-4">
                    <div class="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mr-3"></div>
                    <span class="text-2xl font-bold">CityFix</span>
                    </div>
                    <p class="text-gray-400">
                    Empowering citizens to build better cities through collaborative issue reporting and resolution.
                    </p>
                </div>

                {/* <!-- Quick Links --> */}
                <div>
                    <h3 class="text-lg font-bold mb-6">Quick Links</h3>
                    <ul class="space-y-3">
                    <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Report an Issue</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Browse Issues</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                    </ul>
                </div>

                {/* <!-- Categories --> */}
                <div>
                    <h3 class="text-lg font-bold mb-6">Categories</h3>
                    <ul class="space-y-3">
                    <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Road & Transport</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Sanitation</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Water Supply</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Public Safety</a></li>
                    </ul>
                </div>

                {/* <!-- Contact --> */}
                <div>
                    <h3 class="text-lg font-bold mb-6">Contact Us</h3>
                    <ul class="space-y-3">
                    <li class="flex items-center text-gray-400">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        support@cityfix.com
                    </li>
                    <li class="flex items-center text-gray-400">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        +1 (555) 123-4567
                    </li>
                    <li class="flex items-center text-gray-400">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        123 City Hall, Your City
                    </li>
                    </ul>
                </div>
                </div>

                {/* <!-- Social Media --> */}
                <div class="flex justify-center space-x-6 mb-8">
                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                    </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.279 16.736 5.018 15.622 5 12c.018-3.629.279-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
                    </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                </a>
                </div>

                {/* <!-- Copyright --> */}
                <div class="text-center pt-8 border-t border-gray-800">
                <p class="text-gray-400">
                    © 2024 CityFix. All rights reserved. | 
                    <a href="#" class="hover:text-white transition-colors mx-2">Privacy Policy</a> | 
                    <a href="#" class="hover:text-white transition-colors mx-2">Terms of Service</a>
                </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;