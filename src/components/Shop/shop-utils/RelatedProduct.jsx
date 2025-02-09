
"use client"
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Container from "@/components/custom/Container";
import { SectionHeader } from "@/components/custom/Heading";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useGetAllProductsQuery } from "@/redux/api/productApi";
import LoadingSpinner from "@/components/hooks/Spinner";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { toast } from "react-toastify";

export function RelatedProducts({ category, id }) {
    console.log(category);

    const { data, isLoading, isFetching } = useGetAllProductsQuery({ page: 1, limit: 12 }, {
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    });
    const products = data?.data?.filter((item) => item?.subCategory === category && item.product_id !== id);

    // Always call hooks at the top level
    const [index, setIndex] = useState(0);
    const visibleCards = 6;

    // Functions to handle the carousel movement
    const handleNext = () => {
        if (products) {
            setIndex((prev) => (prev + 1) % products.length);
        }
    };

    const handlePrev = () => {
        if (products) {
            setIndex((prev) => (prev - 1 + products.length) % products.length);
        }
    };

    const carouselRef = useRef(null);
    const maxStars = 5;
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
    return (
        <Container className="md:block hidden">
            {isLoading || isFetching ? <LoadingSpinner /> : null}
            <div className="relative w-full mx-auto mt-10 overflow-hidden">
                <SectionHeader title="Related Products" onNext={handleNext} onPrev={handlePrev} />
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
                        {products && products.map((product, idx) => (
                            <motion.div
                                key={product.id || idx}
                                className="z-20 flex flex-col md:w-full w-80 md:h-full h-20 bg-card shadow-md rounded-lg p-4 md:min-w-80 min-w-20"
                            >
                                <Image
                                    src={product.images[0] || '/p.jpg'}
                                    width={300}
                                    height={300}
                                    priority
                                    alt="Product image"
                                    className="text-4xl mb-2 z-10"
                                />
                                <div className="text-yellow-500">
                                    {Array.from({ length: maxStars }, (_, idx) => (
                                        <span key={idx}>
                                            {idx < Math.floor(product.rating) ? '★' : '☆'}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold md:block hidden">{product.name}</h3>
                                <h3 className="text-sm font-semibold md:block hidden">${product.price}</h3>
                                <div className="flex justify-between w-full gap-2 mt-2">
                                    <Button className="w-full"><Link href={`/details/${product.product_id}`}>View Details</Link></Button>
                                    <Button onClick={() => handleAddToCart(product)} variant="secondary" className="w-full ">Add To Cart</Button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </Container>
    );
}

