import React from 'react'
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { EyeIcon, ShoppingCartIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/cartSlice';
export default function ProductCard({ product, handleAddToCart }) {
    console.log(product);

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 20,
            },
        },
    };

    return (
        <motion.div
            key={product?.product_id}
            variants={cardVariants}
            className="group relative w-68 h-[480px] bg-card border rounded-xl overflow-hidden"
        >
            <div className="relative w-full flex justify-center items-center pt-5 z-10">
                <Image
                    width={200}
                    height={200}
                    src={product?.images[0]}
                    alt={product?.name}
                    className="h-[300px] w-auto transition-transform duration-500 group-hover:scale-90"
                />
            </div>
            <div className="relative p-5 flex flex-col items-center text-center z-20">
                <h3 className="text-lg text-primary font-medium uppercase tracking-wider">
                    {product?.name}
                </h3>
                <h2 className="text-xl text-primary  tracking-wide">$ {product?.price}</h2>
                <div className="opacity-0 space-x-4 mt-5 translate-y-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="primary" className="relative border py-2 px-8 bg-white text-black font-bold uppercase tracking-wider rounded">
                                    <Link href='/details'> <EyeIcon /></Link>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Quick View</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button onClick={() => handleAddToCart(product)} title="Add To Cart" variant="primary" className="relative border py-2 px-8 bg-white text-black font-bold uppercase tracking-wider rounded">
                                    <ShoppingCartIcon />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Add to Cart</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
        </motion.div>
    )
}
