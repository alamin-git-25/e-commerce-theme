import React from 'react'
import { Box, Camera, ChevronRight, Cpu, Gift, Globe, Headphones, Smartphone, Tv, Utensils } from 'lucide-react';
import Link from 'next/link';
export default function ShopCategory() {
    const categories = [
        { name: "New Arrivals", icon: <Box className="w-5 h-5" /> },
        { name: "Electronics", icon: <Cpu className="w-5 h-5" /> },
        { name: "Gifts", icon: <Gift className="w-5 h-5" /> },
        { name: "Computers", icon: <Cpu className="w-5 h-5" /> },
        { name: "Smartphones & Tablets", icon: <Smartphone className="w-5 h-5" /> },
        { name: "TV, Video & Music", icon: <Tv className="w-5 h-5" /> },
        { name: "Cameras", icon: <Camera className="w-5 h-5" /> },
        { name: "Cooking", icon: <Utensils className="w-5 h-5" /> },
        { name: "Accessories", icon: <Box className="w-5 h-5" /> },
        { name: "Sports", icon: <Globe className="w-5 h-5" /> },
        { name: "Electronic Gadgets", icon: <Headphones className="w-5 h-5" /> }
    ];
    return (
        <div
            className=" w-full mt-5 shadow-sm overflow-hidden bg-white dark:bg-gray-700  border border-gray-200 dark:border-gray-600 z-50"
        >
            <h2 className="text-lg font-semibold mb-3 px-4 py-2">Categories</h2>
            <ul className="">
                {categories.map((category, index) => (
                    <li key={index} className="border-b last:border-b-0 dark:border-gray-600">
                        <Link href="#" className="flex items-center justify-between  px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-600 rounded text-gray-800 dark:text-gray-200">
                            <span className="flex gap-2">
                                {category.icon}
                                <span className="ml-2">{category.name}</span>
                            </span>
                            <ChevronRight className="mr-2" />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
