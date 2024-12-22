import React from 'react';

const Footer = () => {
    return (
        <div className='w-full bg-red-700 text-white text-center py-4 flex flex-col items-center'>
            <div className="flex items-center mb-2">
                <img
                    src="logo.JPG"
                    className="w-10 h-10 mr-2 rounded-full"
                    alt="Logo"
                />
                <span className="font-bold text-white text-sm"> Fruitful Foundation</span>
            </div>
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Fruitful Foundation. All rights reserved.
            </p>
        </div>
    );
}

export default Footer;
