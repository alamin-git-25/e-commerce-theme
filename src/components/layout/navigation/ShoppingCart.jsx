"use client";

import { useState } from "react";
import { ShoppingBag, ShoppingCart, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CartDrawer() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Shopping Cart Icon */}

            <ShoppingBag className="size-6" onClick={toggleDrawer} />


            {/* Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                            onClick={toggleDrawer}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth fade transition
                        />

                        {/* Drawer Panel */}
                        <motion.div
                            className="fixed right-0 top-0 h-full w-96 bg-background shadow-xl z-50 flex flex-col"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                type: "tween",          // Smoother easing
                                ease: "easeInOut",       // Natural slide effect
                                duration: 0.5,           // Slightly longer duration for smoothness
                            }}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-4 border-b">
                                <h2 className="text-xl font-semibold">Your Cart</h2>
                                <button
                                    onClick={toggleDrawer}
                                    className="p-2 rounded hover:bg-muted transition"
                                >
                                    <X className="size-5" />
                                </button>
                            </div>

                            {/* Cart Content */}
                            <div className="flex-1 p-4 overflow-y-auto">
                                <p className="text-center text-muted-foreground">Your cart is empty.</p>
                            </div>

                            {/* Footer */}
                            <div className="p-4 border-t">
                                <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition">
                                    Checkout
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
