"use client";

import { useEffect, useState } from "react";
import { Minus, MinusCircle, Plus, PlusCircle, ShoppingBag, ShoppingCart, Trash, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { changeQuantity, removeCart } from "@/redux/cartSlice";
import { products } from "@/lib/data/productData";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function CartDrawer() {
    const [isOpen, setIsOpen] = useState(false);
    const [totalQyt, setTotalQyt] = useState(0)
    const carts = useSelector(store => store.cart.items);
    useEffect(() => {
        let total = 0
        carts.forEach((item) => total += item.quantity);
        setTotalQyt(total)
    }, [carts])
    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };
    const dispatch = useDispatch();
    const handleMinus = (id, quantity) => {
        dispatch(changeQuantity({
            productId: id,
            quantity: quantity - 1
        }))
    }
    const handlePlus = (id, quantity) => {
        dispatch(changeQuantity({
            productId: id,
            quantity: quantity + 1
        }))
    }
    const router = useRouter();
    return (
        <div>
            {/* Shopping Cart Icon */}

            <span className="relative" onClick={toggleDrawer}>
                <ShoppingBag className="size-6 cursor-pointer text-button" />

                {/* Indicator */}
                {totalQyt > 0 && (
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="absolute -top-1 -right-1 cursor-pointer bg-button text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
                    >
                        {totalQyt}
                    </motion.span>
                )}
            </span>

            {/* Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                            onClick={toggleDrawer}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />

                        {/* Drawer Panel with Bounce Effect */}
                        <motion.div
                            className="fixed right-0 top-0 h-full md:w-96 w-full bg-background shadow-xl z-[999] flex flex-col"
                            initial={{ x: "100%" }}
                            animate={{ x: [100, -10, 0] }} // Bounce effect
                            exit={{ x: "100%" }} // Slide out smoothly
                            transition={{
                                type: "spring",
                                stiffness: 120, // Controls speed
                                damping: 15, // Controls bounce
                                duration: 0.5,
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
                                {
                                    carts?.length > 0 ? (
                                        carts.map((item, index) => (
                                            // <li key={index} className="flex items-center gap-4 bg-gray-300 p-1 mb-4">
                                            //     <Image
                                            //         width={50}
                                            //         height={50}
                                            //         src={item.image || '/p.jpg'}
                                            //         alt=""
                                            //         className="size-16 rounded-sm object-cover"
                                            //     />

                                            //     <div>
                                            //         <h3 className="text-xl text-text text-nowrap">{item?.name?.slice(0, 6)}</h3>

                                            //         <dl className="mt-0.5 space-y-1 text-sm text-text">

                                            //             <span className="flex justify-start items-center my-3">
                                            //                 <button onClick={() => handleMinus(item.productId, item.quantity)} className="size-7 bg-card text-text rounded">-</button><span className="size-7 text-center">{item.quantity}</span><button onClick={() => handlePlus(item.productId, item.quantity)} className="size-7 bg-card text-text rounded">+</button>
                                            //             </span>
                                            //             <div>
                                            //                 <dt className="inline">Price:</dt>
                                            //                 <dd className="inline pl-2">
                                            //                     ${item?.price}
                                            //                 </dd>
                                            //             </div>
                                            //             {
                                            //                 item.size && <div>
                                            //                     <dt className="inline">Size:</dt>
                                            //                     <dd className="inline">{item.size}</dd>
                                            //                 </div>
                                            //             }


                                            //             <div>
                                            //                 <dt className="inline">Sub Total:</dt>
                                            //                 <dd className="inline">
                                            //                     ${(item?.price * item?.quantity).toFixed(2)}
                                            //                 </dd>
                                            //             </div>

                                            //         </dl>
                                            //     </div>

                                            //     <div className="flex flex-1 items-center justify-end gap-2">


                                            //         <button onClick={() => dispatch(removeCart({ productId: item.productId }))} className="text-gray-600 pr-2 transition hover:text-red-600">
                                            //             <span className="sr-only">Remove item</span>

                                            //             <Trash />
                                            //         </button>
                                            //     </div>
                                            // </li>
                                            <li className="flex items-center gap-4 border p-1 rounded" key={index}>
                                                <Image src={item?.image} width={80} height={80} alt="" />

                                                <div>
                                                    <h3 className="text-xl text-gray-900 line-clamp-1">{item?.name}</h3>

                                                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                                        <div>
                                                            <dt className="inline text-sm">Price:</dt>
                                                            <dd className="inline text-sm">${(item?.price).toFixed(2)}</dd>
                                                        </div>

                                                        <div>
                                                            <dt className="inline text-sm">Sub Total:</dt>
                                                            <dd className="inline text-sm">${(item.price * item.quantity).toFixed(2)}</dd>
                                                        </div>
                                                    </dl>
                                                </div>

                                                <div className="flex flex-1 items-center justify-end gap-2">
                                                    <span className="flex gap-2 h-full justify-center items-center">


                                                        <MinusCircle className="size-4  cursor-pointer" onClick={() => handleMinus(item?.productId, item?.quantity)} />
                                                        {item?.quantity}
                                                        <PlusCircle className="size-4  cursor-pointer" onClick={() => handlePlus(item?.productId, item?.quantity)} />
                                                    </span>

                                                    <button className="text-gray-600 transition ml-1 hover:text-red-600">
                                                        <span className="sr-only">Remove item</span>

                                                        <Trash onClick={() => dispatch(removeCart({ productId: item.productId }))} />
                                                    </button>
                                                </div>
                                            </li>

                                        ))
                                    ) : (
                                        <p className="text-center text-muted-foreground">Your cart is empty.</p>
                                    )
                                }
                            </div>

                            {/* Footer */}
                            <div className="p-4 border-t">
                                <button disabled={!totalQyt} onClick={() => router.push('/checkout')} className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition">
                                    Checkout
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>


        </div >
    );
}
