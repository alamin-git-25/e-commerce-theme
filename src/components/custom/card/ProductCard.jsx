import React from 'react'
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { EyeIcon, ShoppingCartIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
export default function ProductCard({ product, handleAddToCart }) {


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
            className="group relative  w-full md:h-[550px] h-[300px] bg-card border rounded overflow-hidden"
        >
            <div className="relative w-full flex justify-center items-center md:pt-5 z-10">
                <Image
                    width={200}
                    height={200}
                    src={product?.images[0]}
                    alt={product?.name}
                    className="md:h-[350px] h-auto w-auto transition-transform duration-500 group-hover:scale-90"
                />
            </div>
            <div className="relative p-5 flex flex-col items-center text-center z-20">
                <h3 className="md:text-lg text-sm text-primary font-medium uppercase tracking-wider line-clamp-1">
                    {product?.name}
                </h3>
                <h2 className="md:text-xl text-sm text-primary  tracking-wide">$ {product?.price}</h2>
                <div className="md:block hidden opacity-0 space-x-4 mt-5 translate-y-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="primary" className="relative border py-2 px-8 bg-white text-black font-bold uppercase tracking-wider rounded">
                                    <Link href={`/details/${product.product_id}`}> <EyeIcon /></Link>
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
                <button className='py-1 rounded my-4 text-text px-4 bg-green-400 border md:hidden'>Add To Cart</button>
            </div>
        </motion.div>

    )
}
