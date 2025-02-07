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
        <footer className="mt-36">
            {/* Newsletter Section */}
            <motion.div
                className="bg-gray-200 dark:bg-gray-700 mt-10 text-text p-8 py-20 h-80 text-center relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={listVariants}
            >
                <motion.h2 variants={itemVariants} className="text-xl font-bold">
                    SALE 20% OFF ALL STORE
                </motion.h2>
                <motion.p variants={itemVariants} className="text-lg">
                    Subscribe to our Newsletter
                </motion.p>
                <motion.div
                    variants={itemVariants}
                    className="flex justify-center mt-4"
                >
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="px-4 py-2 w-80 rounded-l-lg"
                    />
                    <button className="bg-green-800 text-white px-4 py-2 rounded-r-lg">
                        Subscribe
                    </button>
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


// "use client";

// import { motion } from "framer-motion";
// import { Facebook, Twitter, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";

// const Footer = () => {
//     const fadeInUp = {
//         hidden: { opacity: 0, y: 50 },
//         visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//     };

//     return (
//         <footer className="mt-10">

//             <motion.div
//                 className="bg-blue-600  text-white py-20 text-center p-8 relative"
//                 initial="hidden"
//                 whileInView="visible"
//                 variants={fadeInUp}
//             >
//                 <h2 className="text-2xl font-bold mb-2">SALE 20% OFF ALL STORE</h2>
//                 <p className="text-lg">Subscribe our Newsletter</p>
//                 <div className="flex justify-center mt-4">
//                     <input
//                         type="email"
//                         placeholder="Enter Your Email"
//                         className="w-80 px-4 py-4 rounded-l-lg text-black"
//                     />
//                     <button className="bg-black text-white px-6 py-2 rounded-r-lg">
//                         Subscribe
//                     </button>
//                 </div>

//             </motion.div>

//             {/* Footer Links Section */}
//             <motion.div
//                 className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8"
//                 initial="hidden"
//                 whileInView="visible"
//                 variants={fadeInUp}
//             >
//                 {/* About Section */}
//                 <div className="text-center md:text-left">
//                     <motion.p
//                         className="text-4xl"
//                         initial="hidden"
//                         whileInView="visible"
//                         variants={fadeInUp}
//                     >LOGO</motion.p>
//                     <p className="text-sm text-gray-600">
//                         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit mollitia recusandae saepe, ad cum laudantium doloribus fuga tempora suscipit quaerat earum voluptate maiores unde debitis nobis. Quibusdam ad sint eum.
//                     </p>
//                     <div className="flex justify-center md:justify-start space-x-4 mt-4">
//                         <a
//                             href="#facebook"
//                             className="p-3 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white"
//                         >
//                             <Facebook className="w-5 h-5" />
//                         </a>
//                         <a
//                             href="#twitter"
//                             className="p-3 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white"
//                         >
//                             <Twitter className="w-5 h-5" />
//                         </a>
//                         <a
//                             href="#youtube"
//                             className="p-3 bg-gray-100 rounded-full hover:bg-red-600 hover:text-white"
//                         >
//                             <Youtube className="w-5 h-5" />
//                         </a>
//                         <a
//                             href="#linkedin"
//                             className="p-3 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white"
//                         >
//                             <Linkedin className="w-5 h-5" />
//                         </a>
//                     </div>
//                 </div>

//                 {/* Footer Links */}
//                 <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
//                     <h3 className="font-bold text-lg mb-4">My Account</h3>
//                     <ul className="text-sm text-gray-600 space-y-2">
//                         <li><a href="#track-orders">Track Orders</a></li>
//                         <li><a href="#shipping">Shipping</a></li>
//                         <li><a href="#wishlist">Wishlist</a></li>
//                         <li><a href="#my-account">My Account</a></li>
//                         <li><a href="#returns">Returns</a></li>
//                     </ul>
//                 </motion.div>

//                 <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
//                     <h3 className="font-bold text-lg mb-4">Information</h3>
//                     <ul className="text-sm text-gray-600 space-y-2">
//                         <li><a href="#our-story">Our Story</a></li>
//                         <li><a href="#careers">Careers</a></li>
//                         <li><a href="#privacy-policy">Privacy Policy</a></li>
//                         <li><a href="#latest-news">Latest News</a></li>
//                         <li><a href="#contact-us">Contact Us</a></li>
//                     </ul>
//                 </motion.div>

//                 <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
//                     <h3 className="font-bold text-lg mb-4">Talk To Us</h3>
//                     <ul className="text-sm text-gray-600 space-y-2">
//                         <li className="flex items-center space-x-2">
//                             <Phone className="w-4 h-4 text-blue-600" />
//                             <span>+670 413 90 762</span>
//                         </li>
//                         <li className="flex items-center space-x-2">
//                             <Mail className="w-4 h-4 text-blue-600" />
//                             <span>support@shofy.com</span>
//                         </li>
//                         <li className="flex items-center space-x-2">
//                             <MapPin className="w-4 h-4 text-blue-600" />
//                             <span>79 Sleepy Hollow St, Jamaica, New York 1432</span>
//                         </li>
//                     </ul>
//                 </motion.div>
//             </motion.div>

//             {/* Categories Section */}
//             <motion.div
//                 className="bg-gray-100 text-sm py-4 px-4"
//                 initial="hidden"
//                 whileInView="visible"
//                 variants={fadeInUp}
//             >
//                 <div className="container mx-auto space-y-2">
//                     <p>
//                         <strong>Health & Beauty:</strong> Top Brands | Best Sellers |
//                         Computers & Laptops | Mobile Phones | CPU Heat Pipes | Accessories |
//                         CPU Coolers
//                     </p>
//                     <p>
//                         <strong>Electronics:</strong> Featured | New Arrivals | TWS Earphones |
//                         Gifts | Computers | Playstation
//                     </p>
//                     <p>
//                         <strong>Fashion:</strong> New Arrivals | Top Brands | Electronics |
//                         Best Sellers
//                     </p>
//                 </div>
//             </motion.div>
//         </footer>
//     );
// };

// export default Footer;


