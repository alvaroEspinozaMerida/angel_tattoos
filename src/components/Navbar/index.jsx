import React, { useState } from 'react';

import './Navbar.scss';  // Import your specific SCSS file

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);



    return (
        <nav className="bg-dark-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">Brand</a>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="#" className="nav-link">Home</a>
                                <a href="#" className="nav-link">Services</a>
                                <a href="#" className="nav-link">About</a>
                                <a href="#" className="nav-link">Contact</a>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="nav-link inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                            {/* Icon for menu button */}
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state. */}
            <div className={isOpen ? "md:hidden" : "hidden"}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="#" className="nav-link-mobile block px-3 py-2 rounded-md text-base font-medium">Home</a>
                    <a href="#" className="nav-link-mobile block px-3 py-2 rounded-md text-base font-medium">Services</a>
                    <a href="#" className="nav-link-mobile block px-3 py-2 rounded-md text-base font-medium">About</a>
                    <a href="#" className="nav-link-mobile block px-3 py-2 rounded-md text-base font-medium">Contact</a>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;


