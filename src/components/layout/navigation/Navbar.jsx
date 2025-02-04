"use client"

import React, { useEffect, useState } from "react";
import Container from "@/components/custom/Container";
import { Input } from "@/components/ui/input";
import { CircleUser, Search, ShoppingBag, User } from "lucide-react";
import { ModeToggle } from "@/components/ui/theme-switcher";
import SearchBar from "./SearchBar";
import { Profile } from "./User";
import CartDrawer from "./ShoppingCart";
import Navigation from "./Navigation";
import { motion } from "framer-motion";

const Navbar = () => {
    const [showStickyNav, setShowStickyNav] = useState(false);

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
        <header className="z-50 bg-background border-b border-border shadow-sm">
            <Container>
                <nav className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <span className="text-primary text-xl font-bold">Logo</span>

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
                        <span className="text-primary text-xl ">Logo</span>
                        <nav className="space-x-4">
                            {["Home", "Shop", "Vendors", "Pages", "Blog", "Contact"].map(item => (
                                <a key={item} href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 ">
                                    {item}
                                </a>
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
        </header>
    );
};

export default Navbar;
