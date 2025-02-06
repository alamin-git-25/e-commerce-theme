import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export const OfferCard = ({ title, description, price, image }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative bg-card w-full  h-full overflow-hidden flex items-center p-6 shadow-lg rounded-lg"
        >

            <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                className="absolute top-0 right-0 w-40 md:w-48"
            >
                <Image
                    src={image}
                    alt={title}
                    width={200}
                    height={200}
                    className="object-cover"

                />
            </motion.div>


            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                className="relative z-10"
            >
                <motion.span
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="inline-block text-white bg-blue-500 px-3 py-1 text-xs font-bold rounded-full"
                >
                    EXCLUSIVE
                </motion.span>
                <h1 className="text-2xl font-bold text-text mt-2">{title}</h1>
                <p className="text-text text-sm mt-2">{description}</p>


                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex mt-4"
                >
                    <a
                        href="#"
                        className="text-xs font-bold text-text px-4 py-2 border border-gray-400 rounded-l-full transition-all duration-300 hover:bg-gray-900 hover:text-white"
                    >
                        ${price}
                    </a>
                    <a
                        href="#"
                        className="text-xs font-bold text-text px-4 py-2 border border-gray-400 rounded-r-full flex items-center gap-2 transition-all duration-300 hover:bg-gray-900 hover:text-white"
                    >
                        <i className="cart-icon ion-bag"></i> ADD TO CART
                    </a>
                </motion.div>
            </motion.div>
        </motion.div>

    );
}

export const OfferBanner = ({ product }) => {
    return (
        <AnimatePresence>
            <motion.section
                key={product.id}
                className="relative grid grid-cols-1 md:grid-cols-[0.9fr_1fr] h-full w-full bg-card p-10 rounded-lg shadow-lg"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                    hidden: { opacity: 0 }, // Remove y movement
                    visible: {
                        opacity: 1,
                        transition: {
                            duration: 1,
                            ease: [0.25, 1, 0.5, 1],
                            staggerChildren: 0.2,
                            delayChildren: 0.2,
                        },
                    },
                    exit: {
                        opacity: 0,
                        transition: {
                            duration: 1,
                            ease: [0.25, 1, 0.5, 1],
                        },
                    },
                }}
            >
                {/* Image Section */}
                <div className="relative">
                    <div className="absolute left-[-2.5em] w-full h-full overflow-hidden rounded-t-lg shadow-lg">
                        <div className="rounded-t-lg bg-gradient-to-r from-[#96e001] to-[#9be010]">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="absolute left-[-3.5em] top-[2em] max-w-[500px] filter saturate-150 contrast-120 hue-rotate-10 drop-shadow-lg"
                            >
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={300}
                                    height={300}
                                    className="object-contain w-full h-full"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Product Info Section */}
                <div className="p-6">
                    <h1 className="text-text font-extrabold text-2xl mb-1">
                        {product.name}
                    </h1>
                    <span className="text-text text-sm">COD: {product.code}</span>
                    <div className="price my-6 text-red-500 text-xl">
                        ${" "}
                        <motion.span
                            className="text-4xl"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                        >
                            {product.price}
                        </motion.span>
                    </div>
                    <ul className="list-disc pl-5 text-sm">
                        {product.description.map((benefit, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.3 }}
                            >
                                {benefit}
                            </motion.li>
                        ))}
                    </ul>
                    <motion.button
                        className="mt-10 bg-red-500 text-white font-semibold text-lg py-3 px-7 rounded-lg shadow-lg transition-all"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        ADD TO CART
                    </motion.button>
                </div>
            </motion.section>
        </AnimatePresence>

    );
}