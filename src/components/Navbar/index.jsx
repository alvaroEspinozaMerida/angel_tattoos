import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import './Navbar.scss';  // Import your specific SCSS file

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);



    return (
        <nav className="bg-dark-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center gap-x-5">
                        <div className="flex-shrink-0">
                            <a href="#" className="text-white py-2 rounded-md text-lg font-medium">Martin's Detail (858)-499-9652</a>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-center space-x-4">
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
                            <div className="h-6 w-6 text-light-primary " >
                                <MenuOutlined />
                            </div>
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


