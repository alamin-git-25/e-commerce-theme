"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RelatedProducts } from "./shop-utils/RelatedProduct";
import ReviewForm from "./shop-utils/Review&Rating";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { useGetProductQuery } from "@/redux/api/productApi";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { toast } from "react-toastify";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import Container from "@/components/custom/Container";
import LoadingSpinner from "@/components/ui/Spinner";
export default function ProductDetails() {
    const params = useParams();
    const { data, isLoading, isFetching } = useGetProductQuery(params?.id, {
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
    });
    const cart = useSelector(store => store.cart.items);


    const dispatch = useDispatch();
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (data && data.images) {
            setSelectedImage(data.images[0]);
        }
    }, [data]);


    if (isLoading || isFetching) {
        return <LoadingSpinner />;
    }
    const product = data;

    const handleAddToCart = () => {
        if (!product) return; // ✅ Prevent errors if product is not loaded
        dispatch(addToCart({
            productId: product?.id,
            quantity: quantity
        }));
        toast.success(`${product.name} added in Cart`)
    };

    return (
        <Container className="my-10">
            <div className="grid md:grid-cols-10 grid-cols-1 gap-6">
                {/* Product Thumbnails */}
                <div className="md:h-[70vh] hidden md:order-none h-full w-full md:grid grid-cols-4 md:grid-rows-4 md:grid-cols-1 gap-2 md:gap-4">
                    {product?.images?.map((img, index) => (
                        <Image
                            key={index}
                            width={200}
                            height={200}
                            src={img}
                            alt="Thumbnail"
                            priority
                            className={`w-full h-full object-contain p-2 rounded-lg cursor-pointer border ${selectedImage === img ? "border-blue-600" : "border-gray-300"}`}
                            onClick={() => setSelectedImage(img)}
                        />
                    ))}
                </div>

                {/* Selected Image */}
                <div className="h-[70vh] bg-card overflow-hidden border rounded-lg md:col-span-5 flex items-center justify-center">
                    <motion.div
                        className="overflow-hidden"
                        key={selectedImage}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        {/* <Image
                            width={1920}
                            height={1080}
                            src={selectedImage || '/p.jpg'}
                            alt={product?.name}
                            priority
                            className="w-full h-full overflow-hidden md:h-full object-contain p-4"
                        /> */}
                        <InnerImageZoom
                            src={selectedImage || '/p.jpg'}
                            zoomSrc={selectedImage || '/p.jpg'}
                            zoomScale={1.5}
                            zoomType="hover"

                        />
                    </motion.div>

                </div>

                {/* Mobile Thumbnails */}
                <div className="md:h-[70vh] md:order-none md:hidden h-full w-full grid grid-cols-4 gap-2 md:gap-4">
                    {product?.images?.map((img, index) => (
                        <Image
                            key={index}
                            width={200}
                            height={200}
                            src={img}
                            alt="Thumbnail"
                            className={`w-full h-full object-contain p-2 rounded-lg cursor-pointer border ${selectedImage === img ? "border-blue-600" : "border-gray-300"}`}
                            onClick={() => setSelectedImage(img)}
                        />
                    ))}
                </div>

                {/* Product Details */}
                <div className="h-auto md:h-[70vh] bg-card rounded-lg border p-5 md:col-span-4">
                    <h3 className="text-2xl md:text-4xl">{product?.name}</h3>
                    <p className="text-yellow-500 my-2">
                        {"⭐".repeat(Math.round(product?.rating))} ({product?.rating})
                    </p>
                    <p className="text-xl md:text-2xl my-4">${product?.price}</p>
                    <p className="mb-6 text-wrap w-full md:w-[75%] border-b-2 pb-4 border-black">
                        {product?.description}
                    </p>

                    {/* Colors */}
                    {product?.colors && (
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold">Colours</h3>
                            <div className="flex flex-wrap space-x-3 mt-2">
                                {product.colors.map((color, index) => (
                                    <div
                                        key={index}
                                        className={`w-8 h-8 rounded-full border-2 cursor-pointer ${selectedColor === color ? "border-red-500" : "border-gray-300"}`}
                                        style={{ backgroundColor: color }}
                                        onClick={() => setSelectedColor(color)}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Sizes */}
                    {product?.sizes && (
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold">Size</h3>
                            <div className="flex flex-wrap space-x-3 mt-2">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        className={`px-4 py-2 rounded-lg border-2 ${selectedSize === size ? "bg-red-500 text-text border-red-500" : "border-gray-300 text-text"}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Quantity and Add to Cart */}
                    <div className="flex items-center flex-wrap space-x-4 mt-6">
                        <div className="space-x-5 flex items-center border rounded">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-[#DB4444] hover:text-white transition-colors duration-500 ease-in-out"
                            >
                                <Minus />
                            </button>
                            <span className="text-lg md:text-xl">{quantity}</span>
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-[#DB4444] hover:text-white transition-colors duration-500 ease-in-out"
                            >
                                <Plus />
                            </button>
                        </div>
                        <button onClick={handleAddToCart} className="px-5 py-2 md:mt-0 bg-green-500 rounded text-white">
                            Add To Cart

                        </button>
                    </div>
                </div>
            </div>

            {/* Related Products and Reviews */}
            <div className="mt-10">
                <RelatedProducts category={product?.subCategory} id={product?.product_id} />
                <ReviewForm />
            </div>
        </Container>
    );
}


