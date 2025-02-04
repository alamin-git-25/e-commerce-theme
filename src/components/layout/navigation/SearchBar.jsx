import { Search } from 'lucide-react'
import React from 'react'

export default function SearchBar() {
    return (
        <div className="flex items-center w-1/2 mx-4 border border-input rounded-lg overflow-hidden bg-card shadow-sm">
            <input
                type="text"
                placeholder="Search products..."
                className="flex-grow px-4 py-2 text-foreground bg-transparent focus:outline-none"
            />
            <button className="bg-primary text-primary-foreground px-4 py-2 hover:bg-primary/90 transition">
                <Search />
            </button>
        </div>
    )
}
