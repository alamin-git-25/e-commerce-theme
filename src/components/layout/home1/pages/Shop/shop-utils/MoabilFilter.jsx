import React from 'react'
import ShopCategory from './ShopCategory'
import BrandsFilter from './Brands'
import { AnimatePresence, motion } from "framer-motion";
import { X } from 'lucide-react';
import PriceRangeSlider from './Price';
import Container from '@/components/custom/Container';
import SearchBar from './Searchbar';
export default function MoabilFilter({ isOpen, toggleMenu }) {
    return (
        <Container className="md:hidden block px-0">
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                            onClick={toggleMenu}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />

                        {/* Sidebar Menu */}
                        <motion.div
                            className="fixed left-0 top-0 h-full w-full bg-white dark:bg-gray-800 shadow-lg z-[999] flex flex-col"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                                duration: 0.5,
                            }}
                        >

                            <div className="flex items-center justify-between p-4 border-b">
                                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-300">Filter</h2>
                                <button onClick={toggleMenu} className="p-2 rounded-lg hover:bg-gray-300 transition">
                                    <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                                </button>
                            </div>
                            <div className='w-full h-screen overflow-y-scroll p-2'>
                                <SearchBar />
                                <ShopCategory />
                                <BrandsFilter />
                                <PriceRangeSlider />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </Container>
    )
}
