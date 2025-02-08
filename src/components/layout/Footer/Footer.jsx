"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react";
import Image from "next/image";

const Footer = () => {
    const listVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const socialIcons = [
        { href: "#facebook", icon: <Facebook className="w-5 h-5" />, label: "Facebook" },
        { href: "#twitter", icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
        { href: "#youtube", icon: <Youtube className="w-5 h-5" />, label: "YouTube" },
        { href: "#linkedin", icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
    ];

    return (
        <footer className="mt-36 ">
            {/* Newsletter Section */}
            <motion.div
                className="bg-gray-200 newsLetter py-8 dark:bg-gray-700 mt-10 text-text p-8 md:py-20 h-80 text-center relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={listVariants}
            >
                <motion.h2 variants={itemVariants} className="text-5xl text-text font-bold">
                    SALE 20% OFF ALL STORE
                </motion.h2>
                <motion.p variants={itemVariants} className="text-xl">
                    Subscribe to our Newsletter
                </motion.p>
                <motion.div
                    variants={itemVariants}
                    className="flex justify-center mt-4"
                >
                    <div className="block md:flex  relative items-center md:w-1/2 mx-4 border border-input rounded overflow-hidden bg-card shadow-sm">
                        <input
                            type="text"
                            placeholder="Enter Your Email..."
                            className="md:flex-grow px-4 py-4 text-xl w-full text-foreground rounded bg-transparent focus:outline-none"
                        />
                        <button className="bg-green-400 md:absolute md:w-36 w-full right-1 text-xl rounded  text-primary-foreground px-6 py-2 hover:bg-primary/90 transition">
                            Subscribe
                        </button>
                    </div>
                </motion.div>

            </motion.div>

            {/* Footer Links Section */}
            <motion.div
                className="container mx-auto mt-10 px-4 py-20 grid grid-cols-1 md:grid-cols-4 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={listVariants}
            >
                {/* Logo Section */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center text-center md:items-start md:text-left"
                >
                    <p className="text-4xl mb-3">LOGO</p>
                    <p className="text-sm text-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magnam tempore, incidunt, optio enim omnis sit alias, animi molestias neque placeat ratione quasi! Asperiores atque dolorem aut esse est cumque?
                    </p>
                    {/* Social Media */}
                    <div className="flex space-x-4 mt-4">
                        {socialIcons.map(({ href, icon, label }, index) => (
                            <motion.a
                                key={index}
                                href={href}
                                aria-label={label}
                                variants={itemVariants}
                                whileHover={{ scale: 1.2 }}
                                className="bg-card p-3 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                            >
                                {icon}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Footer Links */}
                {["My Account", "Information", "Contact Us"].map((title, idx) => (
                    <motion.div key={idx} variants={itemVariants}>
                        <h3 className="font-bold text-lg mb-4">{title}</h3>
                        <motion.ul>
                            {[
                                "Track Orders",
                                "Shipping",
                                "Wishlist",
                                "My Account",
                                "Returns",
                            ].map((link, i) => (
                                <motion.li
                                    key={i}
                                    variants={itemVariants}
                                    className="text-sm text-text mb-2"
                                >
                                    <a href={`#${link}`}>{link}</a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                ))}
            </motion.div>
        </footer>
    );
};

export default Footer;


