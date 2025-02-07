"use client"

import React, { useEffect, useState } from "react";
import Container from "@/components/custom/Container";
import { ModeToggle } from "@/components/ui/theme-switcher";
import SearchBar from "./SearchBar";
import { Profile } from "./User";
import CartDrawer from "./ShoppingCart";
import Navigation from "./Navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, LayoutDashboard, Menu, X } from "lucide-react";
import Category from "./Category";
import Link from "next/link";

const Navbar = () => {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/shop" },
        { name: "Vendors", href: "/vendors" },
        { name: "Pages", href: "/pages" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" }
    ];

    const [showStickyNav, setShowStickyNav] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShowStickyNav(true);
            } else {
                setShowStickyNav(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="">
            <section className="z-50 md:block hidden bg-background border-b border-border shadow-sm">
                <Container>
                    <nav className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <span className="text-indigo-600 text-4xl  font-bold">Lorem</span>

                        <SearchBar />
                        <div className="flex items-center space-x-8">
                            <Profile />
                            <CartDrawer />
                            <ModeToggle />
                        </div>
                    </nav>
                </Container>
                <Navigation />

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: showStickyNav ? 1 : 0, y: showStickyNav ? 0 : -20 }}
                    transition={{ duration: 0.5 }}
                    className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50"
                >
                    {showStickyNav && (
                        <Container className="flex justify-between items-center h-20">
                            <span className="text-indigo-600 text-4xl ">Lorem</span>
                            <nav className="space-x-4">
                                {navLinks.map(item => (
                                    <Link key={item.name} href={item.href} className="text-gray-700 dark:text-gray-300 hover:text-blue-700 ">
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                            <div className="flex items-center space-x-8">
                                <Profile />
                                <CartDrawer />
                                <ModeToggle />
                            </div>
                        </Container>
                    )}
                </motion.div>
            </section>
            <section className="lg:hidden">
                <aside className="   w-full bg-background shadow-md z-50">
                    <div className="flex justify-between items-center p-4">
                        {/* Logo */}
                        <span className="text-primary text-xl font-bold">Lorem</span>

                        <span className="flex justify-center items-center gap-3">
                            <CartDrawer />
                            <ModeToggle />
                            <button onClick={toggleMenu} className="p-2 rounded-lg hover:bg-gray-200 transition">
                                <Menu className="w-6 h-6 " />
                            </button>
                        </span>

                    </div>

                    {/* Animated Sidebar Menu */}
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
                                    className="fixed left-0 overflow-y-scroll top-0 h-full w-full bg-white dark:bg-gray-800 shadow-lg z-[999] flex flex-col"
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
                                    {/* Sidebar Header */}
                                    <div className="flex items-center justify-between p-4 border-b">
                                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-300">Menu</h2>
                                        <button onClick={toggleMenu} className="p-2 rounded-lg hover:bg-gray-300 transition">
                                            <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                                        </button>
                                    </div>
                                    <Category />
                                    {/* Menu Items */}
                                    <nav className="flex flex-col p-4 space-y-4">
                                        {navLinks.map((item, indx) => (
                                            <motion.span
                                                key={indx}
                                                className="text-gray-800 dark:text-gray-300 text-lg font-medium hover:text-blue-600 transition"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                            >
                                                <Link href={item.href}>{item.name}</Link>
                                            </motion.span>
                                        ))}
                                    </nav>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </aside>
            </section>
        </header >
    );
};

export default Navbar;
