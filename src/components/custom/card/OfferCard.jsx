import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingCart, ShoppingCartIcon } from "lucide-react";

export const OfferCard = ({ title, description, price, image }) => {
    return (
        // <motion.div
        //     initial={{ opacity: 0, scale: 0.9 }}
        //     animate={{ opacity: 1, scale: 1 }}
        //     transition={{ duration: 0.5, ease: "easeOut" }}
        //     className="relative bg-card w-full  h-full overflow-hidden grid grid-cols-2 gap-3 p-6 shadow-lg rounded-lg"
        // >

        //     <motion.div
        //         initial={{ x: 50, opacity: 0 }}
        //         animate={{ x: 0, opacity: 1 }}
        //         transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        //         className="absolute top-0 right-0"
        //     >
        //         <Image
        //             src={image}
        //             alt={title}
        //             width={200}
        //             height={200}
        //             className="object-contain w-full h-full"

        //         />
        //     </motion.div>


        //     <motion.div
        //         initial={{ x: -50, opacity: 0 }}
        //         animate={{ x: 0, opacity: 1 }}
        //         transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        //         className="relative z-10"
        //     >
        //         <motion.span
        //             initial={{ y: -20, opacity: 0 }}
        //             animate={{ y: 0, opacity: 1 }}
        //             transition={{ delay: 0.4, duration: 0.5 }}
        //             className="inline-block text-white bg-blue-500 px-3 py-1 text-xs font-bold rounded-full"
        //         >
        //             EXCLUSIVE
        //         </motion.span>
        //         <h1 className="text-2xl font-bold text-text mt-2">{title}</h1>
        //         <p className="text-text text-sm mt-2 line-clamp-3">{description}</p>


        //         <motion.div
        //             initial={{ y: 20, opacity: 0 }}
        //             animate={{ y: 0, opacity: 1 }}
        //             transition={{ delay: 0.5, duration: 0.5 }}
        //             className="flex mt-4"
        //         >
        //             <a
        //                 href="#"
        //                 className="text-xs font-bold text-text px-4 py-2 border border-gray-400 rounded-l-full transition-all duration-300 hover:bg-gray-900 hover:text-white"
        //             >
        //                 ${price}
        //             </a>
        //             <a
        //                 href="#"
        //                 className="text-xs font-bold text-text px-4 py-2 border border-gray-400 rounded-r-full flex items-center gap-2 transition-all duration-300 hover:bg-gray-900 hover:text-white"
        //             >
        //                 <i className="cart-icon ion-bag"></i> ADD TO CART
        //             </a>
        //         </motion.div>
        //     </motion.div>
        // </motion.div>
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative bg-card w-full h-full overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-5 p-6 shadow rounded-lg"
        >
            <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                className="md:absolute max-w-[450px] max-h-[400px] md:top-0 md:right-0 flex justify-center md:block"
            >
                <Image
                    src={image}
                    alt={title}
                    width={200}
                    height={200}
                    className="object-contain w-full   h-full"
                />
            </motion.div>

            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                className="relative z-10 text-center md:text-left"
            >
                <motion.span
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="inline-block text-white bg-blue-500 px-3 py-1 text-xs font-bold rounded-full"
                >
                    EXCLUSIVE
                </motion.span>
                <h1 className="text-xl line-clamp-2 text-text mt-2">{title}</h1>
                <p className="text-text text-sm mt-2 line-clamp-2 ">{description}</p>
                <p

                    className="text-xl font-bold text-text mt-3   rounded-full transition-all duration-300  "
                >
                    ${price}
                </p>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex flex-wrap justify-center md:justify-start mt-4 gap-2"
                >

                    <a
                        href="#"
                        className="text-xs font-bold text-text px-4 py-2 border border-gray-400 rounded-full flex items-center gap-2 transition-all duration-300 hover:bg-button-foreground hover:text-white"
                    >
                        <ShoppingCartIcon /> ADD TO CART
                    </a>
                </motion.div>
            </motion.div>
        </motion.div>

    );
}

export const OfferBanner = ({ title, description, price, image }) => {
    return (
        // <AnimatePresence>

        //     <motion.div
        //         initial={{ opacity: 0, scale: 0.9 }}
        //         animate={{ opacity: 1, scale: 1 }}
        //         transition={{ duration: 0.5, ease: "easeOut" }}
        //         className="relative bg-card w-full gap-5 h-full overflow-hidden grid grid-cols-2  p-6 shadow-lg rounded-lg"
        //     >

        //         <motion.div
        //             initial={{ x: 50, opacity: 0 }}
        //             animate={{ x: 0, opacity: 1 }}
        //             transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}

        //         >
        //             <Image
        //                 src={image}
        //                 alt={title}
        //                 width={200}
        //                 height={200}
        //                 className="object-contain w-full h-full"

        //             />
        //         </motion.div>


        //         <motion.div
        //             initial={{ x: -50, opacity: 0 }}
        //             animate={{ x: 0, opacity: 1 }}
        //             transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        //             className="relative z-10 flex flex-col justify-center gap-5 items-start"
        //         >
        //             <motion.span
        //                 initial={{ y: -20, opacity: 0 }}
        //                 animate={{ y: 0, opacity: 1 }}
        //                 transition={{ delay: 0.4, duration: 0.5 }}
        //                 className="inline-block text-white bg-blue-500 px-3 py-1 text-xs font-bold rounded-full"
        //             >
        //                 EXCLUSIVE
        //             </motion.span>
        //             <h1 className="text-2xl font-bold text-text mt-2">{title}</h1>
        //             <p className="text-text text-sm mt-2 line-clamp-3">{description}</p>


        //             <motion.div
        //                 initial={{ y: 20, opacity: 0 }}
        //                 animate={{ y: 0, opacity: 1 }}
        //                 transition={{ delay: 0.5, duration: 0.5 }}
        //                 className="flex mt-4"
        //             >
        //                 <a
        //                     href="#"
        //                     className="text-xs font-bold text-text px-4 py-2 border border-gray-400 rounded-l-full transition-all duration-300 hover:bg-gray-900 hover:text-white"
        //                 >
        //                     ${price}
        //                 </a>
        //                 <a
        //                     href="#"
        //                     className="text-xs font-bold text-text px-4 py-2 border border-gray-400 rounded-r-full flex items-center gap-2 transition-all duration-300 hover:bg-gray-900 hover:text-white"
        //                 >
        //                     <i className="cart-icon ion-bag"></i> ADD TO CART
        //                 </a>
        //             </motion.div>
        //         </motion.div>
        //     </motion.div>
        // </AnimatePresence >
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative bg-card w-full h-full overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-5 p-6 shadow rounded-lg"
            >
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 50, opacity: 0 }}
                    transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                    className="flex justify-center md:block"
                >
                    <Image
                        src={image}
                        alt={title}
                        width={200}
                        height={200}
                        className="object-contain w-full max-w-[450px] md:max-w-full h-auto"
                    />
                </motion.div>

                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                    className="relative z-10 flex flex-col justify-center gap-4 items-center md:items-start text-center md:text-left"
                >
                    <motion.span
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="inline-block text-white bg-blue-500 px-3 py-1 text-xs font-bold rounded-full"
                    >
                        EXCLUSIVE
                    </motion.span>
                    <h1 className="text-2xl font-bold text-text">{title}</h1>
                    <p className="text-text text-sm line-clamp-3 overflow-hidden">{description}</p>
                    <p

                        className="text-2xl block font-bold text-text px-4 py-2  rounded-full transition-all duration-300  "
                    >
                        ${price}
                    </p>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className=" mt-4"
                    >

                        <a
                            href="#"
                            className="text-xs font-bold text-text px-4 py-2 border border-gray-400 rounded-full flex items-center gap-2 transition-all duration-300 hover:bg-button hover:text-white"
                        >
                            <ShoppingCart /> ADD TO CART
                        </a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>

    );
}