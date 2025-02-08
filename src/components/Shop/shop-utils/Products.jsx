"use client";

import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/custom/Container";
import { EyeIcon, ShoppingCartIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import Pagination from "@/components/custom/Pagination";
import Image from "next/image";
import Link from "next/link";
import LoadingSpinner from "@/components/hooks/Spinner";
import NotFound from "@/components/hooks/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { useEffect, useState } from "react";

export default function Products({ isGridView, products = [], totalPages, limit, page, setPage, isLoading }) {
    const [selectedOptions, setSelectedOptions] = useState({});

    // Set default color & size when products change
    useEffect(() => {
        if (products.length > 0) {
            const defaultSelections = products.reduce((acc, product) => {
                acc[product.product_id] = {
                    color: product.colors?.[0] || null, // First color as default
                    size: product.sizes?.[0] || null,   // First size as default
                };
                return acc;
            }, {});
            setSelectedOptions(defaultSelections);
        }
    }, [products]);

    // Handle color & size selection
    const handleSelect = (productId, type, value) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [productId]: { ...prev[productId], [type]: value },
        }));
    };

    // Motion Variants
    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
    };

    // Render star rating
    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={index < Math.floor(rating) ? "text-yellow-500" : "text-gray-300"}>
                ★
            </span>
        ));
    };

    // Redux
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        if (!selectedOptions[product.product_id]) return;
        const { color, size } = selectedOptions[product.product_id];

        dispatch(addToCart({
            productId: product?.product_id,
            quantity: 1,
            color,
            size,
            name: product?.name,
            image: product?.images?.[0] || "/placeholder.jpg",
            price: product?.price,
        }));
    };

    return (
        <Container className="mt-5 pb-10">
            {/* Loading Spinner */}
            {isLoading && <LoadingSpinner />}

            {/* Product Grid */}
            {products.length > 0 ? (
                <section>
                    <AnimatePresence mode="wait">
                        <motion.section
                            key={page}
                            className={`grid ${isGridView ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" : "grid-cols-1 gap-4"}`}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={containerVariants}
                        >
                            {products.map((product) => (
                                <motion.div
                                    key={product.product_id}
                                    whileHover={{ scale: 1.01 }}
                                    className={`group bg-card p-4 border rounded shadow transition-transform duration-500 ${isGridView ? "h-auto" : "flex items-center space-x-4"
                                        }`}
                                >
                                    {/* Product Image */}
                                    <Image
                                        width={200}
                                        height={200}
                                        src={product?.images?.[0] || "/placeholder.jpg"}
                                        alt={product.name}
                                        className={`${isGridView ? "w-full h-44 object-cover rounded" : "w-24 h-24 object-cover rounded"}`}
                                    />

                                    {/* Product Details */}
                                    <div className={`${isGridView ? "mt-2" : "ml-4 flex-1"}`}>
                                        <h2 className="text-lg font-semibold">{product.name}</h2>
                                        <div>{renderStars(product.rating)}</div>
                                        <p className="text-text">${product.price.toFixed(2)}</p>

                                        {/* Color Options */}
                                        {product?.colors?.length > 0 && (
                                            <div className="my-4 flex items-center gap-3">
                                                <h3 className="font-semibold">Color:</h3>
                                                <div className="flex space-x-2">
                                                    {product.colors.map((color) => (
                                                        <div
                                                            key={color}
                                                            className={`w-7 h-7 rounded-full border-2 cursor-pointer ${selectedOptions[product.product_id]?.color === color
                                                                ? "border-red-500"
                                                                : "border-gray-300"
                                                                }`}
                                                            style={{ backgroundColor: color }}
                                                            onClick={() => handleSelect(product.product_id, "color", color)}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Size Options */}
                                        {product?.sizes?.length > 0 && (
                                            <div className="mb-4 flex items-center gap-4">
                                                <h3 className="text-sm font-semibold">Size:</h3>
                                                <div className="flex space-x-3">
                                                    {product.sizes.map((size) => (
                                                        <button
                                                            key={size}
                                                            className={`px-2 py-1 rounded-lg border-2 ${selectedOptions[product.product_id]?.size === size
                                                                ? "bg-red-500 text-white border-red-500"
                                                                : "border-gray-300"
                                                                }`}
                                                            onClick={() => handleSelect(product.product_id, "size", size)}
                                                        >
                                                            {size}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Quick Actions */}

                                    <div className="flex justify-between gap-2">
                                        <button className="px-2 py-2  border w-full bg-gray-400 rounded text-white text-nowrap"><Link href={`/details/${product.product_id}`}>
                                            View Product
                                        </Link></button>
                                        <button className="px-2 py-2  border w-full bg-gray-700 rounded text-white text-nowrap" onClick={() => handleAddToCart(product)}>Add To Cart</button>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.section>
                    </AnimatePresence>

                    {/* Pagination */}
                    {products && (
                        <div className="flex justify-center mt-4">
                            <Pagination setPage={setPage} page={page} totalPages={totalPages} />
                        </div>
                    )}
                </section>
            ) : (
                <NotFound />
            )}
        </Container>
    );
}
