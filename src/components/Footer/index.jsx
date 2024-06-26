import React from "react";

const Footer = () => {

    return (
        <>
            <div className="flex flex-row gap-12 items-start">
                <div className="z-10 flex flex-col gap-4" >
                    <h1 className="text-primary-text-dark text-xl">Explore</h1>
                    <h2 className="text-secondary-text-dark text-l">Tattoos</h2>
                    <h2 className="text-secondary-text-dark text-l">About Me</h2>
                </div>
                <div className="z-10 flex flex-col gap-4" >
                    <h1 className="text-primary-text-dark text-xl">Useful Links</h1>
                    <h2 className="text-secondary-text-dark text-l">FAQS</h2>
                    <h2 className="text-secondary-text-dark text-l">Schedule an Appointment</h2>
                    <h2 className="text-secondary-text-dark text-l">Reviews</h2>
                </div>
                <div className="z-10 flex flex-col gap-4" >
                    <h1 className="text-primary-text-dark text-xl">Get a Free Quote</h1>
                    <h2 className="text-secondary-text-dark text-l">Tattoos</h2>
                    <h2 className="text-secondary-text-dark text-l">About Us</h2>
                </div>
                <div className="z-10 flex flex-col gap-4 " >
                    <h1 className="text-primary-text-dark text-xl">Contact</h1>
                    <h2 className="text-secondary-text-dark text-l">Address:<br/>2630 Flower Fields Way,<br/>Carlsbad CA, 92010</h2>
                    <h2 className="text-secondary-text-dark text-l">Phone: (858) 499 9652</h2>
                </div>
            </div>
        </>
    )
}

export default Footer;