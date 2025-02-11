"use client"

import { MoveRight, MoveUpRight, Search } from 'lucide-react'
import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/navigation';
import { useGetEveryProductsQuery } from '@/redux/api/productApi';
import Image from 'next/image';
export default function SearchBar() {
    const { data: dropdownItems, isLoading } = useGetEveryProductsQuery(undefined, {
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    const [searchTerm, setSearchTerm] = useState("");
    const filteredItems = dropdownItems?.filter((item) =>
        item?.name?.toLowerCase().includes(searchTerm.toLowerCase()) || item?.category?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const router = useRouter();
    const handleSearch = (id) => {
        setSearchTerm('');
        router.push(`/details/${id}`)
    }

    return (
        <section className='w-1/2 mx-4 relative'>
            <div className="flex relative items-center  border border-input rounded overflow-hidden bg-card shadow-sm">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-grow px-4 py-3 text-foreground bg-transparent focus:outline-none"
                />
                <button className="bg-button absolute right-1  text-white px-6 py-2 hover:bg-button-foreground rounded transition">
                    <Search />
                </button>

            </div>
            <AnimatePresence>
                {searchTerm && (
                    <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute w-full max-h-[600px] overflow-y-scroll bg-card shadow-md rounded mt-1 overflow-hidden z-50"
                    >
                        {filteredItems.length > 0 ? (
                            filteredItems.map((item) => (
                                <li
                                    key={item.product_id}
                                    className="px-4 flex justify-between items-center gap-4 border-b dark:border-white py-3 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
                                    onClick={() => handleSearch(item?.product_id)}
                                >
                                    <span className='flex items-center gap-4'>
                                        <Image src={item.images[0]} width={80} height={80} alt={item.name} />
                                        <span className='py-2 '>
                                            <b>{item.name}</b>
                                            <p>{item.rating}</p>
                                            <p>${item.price}</p>
                                        </span>
                                    </span>
                                    <MoveUpRight />
                                </li>
                            ))
                        ) : (
                            <li className="px-4 py-2 text-gray-500">No results found</li>
                        )}
                    </motion.ul>
                )}
            </AnimatePresence>
        </section>
    )
}



// "use client";

// import { Search } from "lucide-react";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function SearchBar() {
//     const dropdownItems = [
//         { id: 1, name: "Smartphone" },
//         { id: 2, name: "Laptop" },
//         { id: 3, name: "Tablet" },
//         { id: 4, name: "Headphones" },
//         { id: 5, name: "Smartwatch" },
//     ];

//     const [searchTerm, setSearchTerm] = useState("");
//     const filteredItems = dropdownItems.filter((item) =>
//         item.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div className="relative w-1/2 mx-4 border border-input rounded bg-card shadow-sm">
//             <div className="flex items-center">
//                 <input
//                     type="text"
//                     placeholder="Search products..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="flex-grow px-4 py-3 text-foreground bg-transparent focus:outline-none"
//                 />
//                 <button className="bg-green-400 text-primary-foreground px-6 py-2 hover:bg-primary/90 transition">
//                     <Search />
//                 </button>
//             </div>
//             <AnimatePresence>
//                 {searchTerm && (
//                     <motion.ul
//                         initial={{ opacity: 0, y: -10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -10 }}
//                         transition={{ duration: 0.2 }}
//                         className="absolute w-full bg-white shadow-md rounded mt-1 overflow-hidden z-50"
//                     >
//                         {filteredItems.length > 0 ? (
//                             filteredItems.map((item) => (
//                                 <li
//                                     key={item.id}
//                                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                                     onClick={() => setSearchTerm(item.name)}
//                                 >
//                                     {item.name}
//                                 </li>
//                             ))
//                         ) : (
//                             <li className="px-4 py-2 text-gray-500">No results found</li>
//                         )}
//                     </motion.ul>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// }
