import React from 'react';
import Link from 'next/link';

function Header() {
    return (
        <div className="flex flex-row justify-between bg-gradient-to-r from-blue-300 to-green-300 md:text-3xl xl:text-7xl focus:outline-none">
            <Link href="/">
                <a>
                    <img
                        className="h-16 ml-3.5 md:h-20 md:ml-7 xl:h-28 xl:ml-12"
                        src="https://res.cloudinary.com/dxuvn93uw/image/upload/v1609025900/logo_mkyalm.png"
                        alt="Logo"
                        loading="lazy"
                    />
                </a>
            </Link>
            <p className="mr-6 mt-5 md:mr-8 text-blue-800 xl:mr-10">anakbiologi.com</p>
        </div>
    );
}

export default Header;
