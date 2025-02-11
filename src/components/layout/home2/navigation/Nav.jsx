import { Search, ShoppingCart, User } from 'lucide-react'
import React from 'react'

export default function Nav() {
    return (
        <header className="w-screen">
            <nav className="flex justify-between items-center text-white h-[12vh] bg-black px-20">
                {/* Logo Section */}
                <span className="text-xl font-bold">Logo</span>

                {/* Navigation Links */}
                <ul className="flex space-x-6">
                    <li className="hover:text-blue-400 cursor-pointer">Home</li>
                    <li className="hover:text-blue-400 cursor-pointer">Shop</li>
                    <li className="hover:text-blue-400 cursor-pointer">About</li>
                    <li className="hover:text-blue-400 cursor-pointer">Contact</li>
                </ul>

                {/* Action Icons */}
                <span className="flex space-x-4 items-center">
                    <Search /> {/* Replace with your search component */}
                    <User /> {/* Replace with your user component */}
                    <ShoppingCart /> {/* Replace with your shopping cart component */}
                </span>
            </nav>
        </header>

    )
}
