"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import Container from "@/components/custom/Container";
import { SectionHeader } from "@/components/custom/Heading";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useGetAllProductsQuery } from "@/redux/api/productApi";
import { addToCart } from "@/redux/cartSlice";
import Link from "next/link";





export function NewArrival() {
    const [page, setPage] = useState(1);
    const limit = 12;

    // Fetch product data
    const { data, isLoading, isFetching } = useGetAllProductsQuery(
        { page, limit },
        { refetchOnFocus: true, refetchOnMountOrArgChange: true }
    );

    const products = useMemo(() => data?.data || [], [data]);
    const [index, setIndex] = useState(0);
    const visibleCards = 4;
    const handleNext = () => {
        setIndex((prev) => (prev + 1) % products.length);
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + products.length) % products.length);
    };
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {

        dispatch(addToCart({
            productId: product?.product_id,
            quantity: 1,
            color: "#fff",
            size: 'Cv',
            name: product?.name,
            image: product?.images?.[0],
            price: product?.price,
        }));
        toast.success(`${product?.name}  added to cart!`);
    };
    const carouselRef = useRef(null);
    const maxStars = 5;
    return (
        <Container className="md:block hidden">
            <div className="relative w-full  mx-auto mt-10 overflow-hidden">

                <SectionHeader title="New Arrival" onNext={handleNext} onPrev={handlePrev} />

                <div className="relative overflow-hidden py-5">
                    <motion.div
                        ref={carouselRef}
                        className="flex gap-4 cursor-grab"
                        initial={{ x: 0 }}
                        animate={{ x: `-${index * (100 / visibleCards)}%` }}
                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                        drag="x"
                        dragConstraints={{ left: -500, right: 0 }}
                        whileTap={{ cursor: "grabbing" }}
                    >
                        {[...products, ...products].map((product, index) => (
                            <motion.div
                                key={index}
                                className="z-20 flex flex-col relative   md:w-full w-20 md:h-auto h-20 bg-card shadow-md rounded-lg p-4 md:min-w-80 min-w-20"

                            >
                                <Image src={product?.images[0]} width={300} height={300} alt="d" className="text-4xl mb-2 z-10" />
                                <div className="text-yellow-500">
                                    {Array.from({ length: maxStars }, (_, index) => (
                                        <span key={index}>
                                            {index < Math.floor(product.rating) ? '★' : '☆'}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold line-clamp-2  md:block hidden">{product.name}</h3>
                                <h3 className="text-sm font-semibold  md:block hidden">${product.price}</h3>
                                <div className="flex justify-between absolute bottom-0 left-0 p-2 items-end w-full gap-2 mt-2">
                                    <button className="w-full border text-text px-4 py-2 rounded hover:bg-button hover:text-white"><Link href={`/details/${product.product_id}`}>View Details</Link></button>
                                    <button onClick={() => handleAddToCart(product)} variant="secondary" className="w-full px-4 py-2 rounded text-white bg-button hover:bg-button-foreground">Add To Cart</button>
                                </div>
                            </motion.div>


                        ))}
                    </motion.div>
                </div>
            </div>
        </Container>
    );
}

