// "use client"
// import React, { useState } from 'react'
// import Container from '../custom/Container'
// import { RelatedProducts } from './shop-utils/RelatedProduct'
// import ReviewForm from './shop-utils/Review&Rating'
// import Image from 'next/image'
// import { Minus, Plus } from 'lucide-react'
// import { Button } from '../ui/button'
// import { motion } from "framer-motion";
// export default function ProductDetails() {

//     const product = {
//         id: 1,
//         name: "Wireless Headphones",
//         price: 59.99,
//         images: ["/p.jpg", "/2.png", "/3.png", "/4.png",],
//         category: "Electronics",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione facere officia ex voluptatum, eligendi alias dignissimos quis quod laborum! Quod a adipisci quibusdam hic dignissimos ratione. Ipsam fugiat nisi consequuntur.",
//         stock: 25,
//         rating: 4.5,
//         colors: ["#FF0000", "#0000FF", "#000000", "#FFFFFF"],
//         sizes: ["S", "M", "L", "XL"],
//     }
//     const [selectedImage, setSelectedImage] = useState(product.images[0]);
//     const [selectedSize, setSelectedSize] = useState(null);
//     const [selectedColor, setSelectedColor] = useState(null);
//     const [quantity, setQuantity] = useState(1);
//     return (
//         <Container className="my-10">
//             <div className='grid md:grid-cols-10  grid-cols-1 gap-3 '>
//                 <div className='h-[70vh] w-full  grid grid-rows-4 gap-4'>
//                     {
//                         product.images.map((img, index) => (
//                             <Image
//                                 width={200}
//                                 height={200}
//                                 key={index}
//                                 src={img}
//                                 alt="Thumbnail"
//                                 className={`w-full h-full object-contain p-2 rounded-lg cursor-pointer border  ${selectedImage === img ? "border-blue-600" : "border-gray-300"
//                                     }`}
//                                 onClick={() => setSelectedImage(img)}
//                             />
//                         ))
//                     }

//                 </div>
//                 <div className="h-[70vh] rounded-lg border col-span-5 flex items-center justify-center">
//                     <motion.div
//                         key={selectedImage} // Re-renders when selectedImage changes
//                         initial={{ opacity: 0, scale: 0.95 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         exit={{ opacity: 0, scale: 0.95 }}
//                         transition={{ duration: 0.5, ease: "easeInOut" }}
//                     >
//                         <Image
//                             width={500}
//                             height={500}
//                             src={selectedImage}
//                             alt={product.name}
//                             className="w-auto h-auto  object-contain p-4"
//                         />
//                     </motion.div>
//                 </div>
//                 {/* <div className='h-[70vh] rounded-lg  col-span-5'>
//                     <Image
//                         width={500}
//                         height={500}
//                         src={selectedImage}
//                         alt={product.name}
//                         className="w-full h-full  border border-gray-400 object-contain p-4 rounded-lg transition-transform duration-300"
//                     />
//                 </div> */}
//                 <div className='h-[70vh] rounded-lg border p-5 col-span-4'>
//                     <h3 className='text-4xl'>{product.name}</h3>
//                     <p className="text-yellow-500 my-2">
//                         {"⭐".repeat(Math.round(product.rating))} ({product.rating} )
//                     </p>
//                     <p className="text-2xl  my-4 ">${product.price}</p>
//                     <p className=" mb-6 text-wrap w-[75%] border-b-2 pb-4 border-black">{product.description}</p>
//                     {
//                         product.colors && <div className="mb-4">
//                             <h3 className="text-lg font-semibold">Colours</h3>
//                             <div className="flex space-x-3 mt-2">
//                                 {product?.colors?.map((color, index) => (
//                                     <div
//                                         key={index}
//                                         className={`w-8 h-8 rounded-full border-2 cursor-pointer ${selectedColor === color ? "border-red-500" : "border-gray-300"
//                                             }`}
//                                         style={{ backgroundColor: color }}
//                                         onClick={() => setSelectedColor(color)}
//                                     ></div>
//                                 ))}
//                             </div>
//                         </div>
//                     }
//                     {
//                         product.sizes && <div className="mb-4">
//                             <h3 className="text-lg font-semibold">Size</h3>
//                             <div className="flex space-x-3 mt-2">
//                                 {product.sizes.map((size) => (
//                                     <button
//                                         key={size}
//                                         className={`px-4 py-2 rounded-lg border-2 ${selectedSize === size
//                                             ? "bg-red-500 text-white border-red-500"
//                                             : "border-gray-300 text-gray-800"
//                                             }`}
//                                         onClick={() => setSelectedSize(size)}
//                                     >
//                                         {size}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>
//                     }
//                     <div className="flex items-center space-x-4 mb-4 mt-10">
//                         <span className='space-x-5 rounded flex items-center border'>
//                             <button
//                                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                                 className="px-5 py-2 bg-gray-300 rounded hover:bg-[#DB4444] hover:text-white transition-colors duration-500 ease-in-out"
//                             >
//                                 <Minus />
//                             </button>
//                             <span className="text-xl ">{quantity}</span>
//                             <button
//                                 onClick={() => setQuantity(quantity + 1)}
//                                 className="px-5 py-2 bg-gray-300 rounded hover:bg-[#DB4444] hover:text-white transition-colors duration-500 ease-in-out"
//                             >
//                                 <Plus />
//                             </button>
//                         </span>
//                         <button className='px-5 py-2 bg-[#DB4444] rounded text-white'>Add To cart</button>
//                     </div>
//                 </div>

//             </div>
//             <RelatedProducts />
//             <ReviewForm />
//         </Container>
//     )
// }


// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Container from "../custom/Container";
// import { RelatedProducts } from "./shop-utils/RelatedProduct";
// import ReviewForm from "./shop-utils/Review&Rating";
// import Image from "next/image";
// import { Minus, Plus } from "lucide-react";

// export default function ProductDetails() {
//     const product = {
//         id: 1,
//         name: "Wireless Headphones",
//         price: 59.99,
//         images: ["/p.jpg", "/2.png", "/3.png", "/4.png"],
//         category: "Electronics",
//         description:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione facere officia ex voluptatum, eligendi alias dignissimos quis quod laborum! Quod a adipisci quibusdam hic dignissimos ratione. Ipsam fugiat nisi consequuntur.",
//         stock: 25,
//         rating: 4.5,
//         colors: ["#FF0000", "#0000FF", "#000000", "#FFFFFF"],
//         sizes: ["S", "M", "L", "XL"],
//     };

//     const [selectedImage, setSelectedImage] = useState(product.images[0]);
//     const [selectedSize, setSelectedSize] = useState(null);
//     const [selectedColor, setSelectedColor] = useState(null);
//     const [quantity, setQuantity] = useState(1);

//     return (
//         <Container className="my-10">
//             <div className="grid md:grid-cols-10 grid-cols-1 gap-3">
//                 {/* Sidebar Thumbnails */}
//                 <div className="h-[70vh] w-full grid grid-rows-4 gap-4">
//                     {product.images.map((img, index) => (
//                         <Image
//                             width={200}
//                             height={200}
//                             key={index}
//                             src={img}
//                             alt="Thumbnail"
//                             className={`w-full h-full object-contain p-2 rounded-lg cursor-pointer border ${selectedImage === img ? "border-blue-600" : "border-yellow-300"
//                                 }`}
//                             onClick={() => setSelectedImage(img)}
//                         />
//                     ))}
//                 </div>

//                 {/* Main Image with Animation */}
//                 <div className="h-[70vh] rounded-lg col-span-5 flex items-center justify-center">
//                     <motion.div
//                         key={selectedImage} // Re-renders when selectedImage changes
//                         initial={{ opacity: 0, scale: 0.95 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         exit={{ opacity: 0, scale: 0.95 }}
//                         transition={{ duration: 0.5, ease: "easeInOut" }}
//                     >
//                         <Image
//                             width={500}
//                             height={500}
//                             src={selectedImage}
//                             alt={product.name}
//                             className="w-auto h-auto object-contain p-4"
//                         />
//                     </motion.div>
//                 </div>

//                 {/* Product Details */}
//                 <div className="h-[70vh] rounded-lg border p-5 col-span-4">
//                     <h3 className="text-4xl">{product.name}</h3>
//                     <p className="text-yellow-500 my-2">
//                         {"⭐".repeat(Math.round(product.rating))} ({product.rating})
//                     </p>
//                     <p className="text-2xl my-4 ">${product.price}</p>
//                     <p className="mb-6 text-wrap w-[75%] border-b-2 pb-4 border-black">
//                         {product.description}
//                     </p>

//                     {/* Colors */}
//                     {product.colors && (
//                         <div className="mb-4">
//                             <h3 className="text-lg font-semibold">Colours</h3>
//                             <div className="flex space-x-3 mt-2">
//                                 {product.colors.map((color, index) => (
//                                     <div
//                                         key={index}
//                                         className={`w-8 h-8 rounded-full border-2 cursor-pointer ${selectedColor === color
//                                                 ? "border-red-500"
//                                                 : "border-gray-300"
//                                             }`}
//                                         style={{ backgroundColor: color }}
//                                         onClick={() => setSelectedColor(color)}
//                                     ></div>
//                                 ))}
//                             </div>
//                         </div>
//                     )}

//                     {/* Sizes */}
//                     {product.sizes && (
//                         <div className="mb-4">
//                             <h3 className="text-lg font-semibold">Size</h3>
//                             <div className="flex space-x-3 mt-2">
//                                 {product.sizes.map((size) => (
//                                     <button
//                                         key={size}
//                                         className={`px-4 py-2 rounded-lg border-2 ${selectedSize === size
//                                                 ? "bg-red-500 text-white border-red-500"
//                                                 : "border-gray-300 text-gray-800"
//                                             }`}
//                                         onClick={() => setSelectedSize(size)}
//                                     >
//                                         {size}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>
//                     )}

//                     {/* Quantity Selector */}
//                     <div className="flex items-center space-x-4 mb-4 mt-10">
//                         <span className="space-x-5 rounded flex items-center border">
//                             <button
//                                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                                 className="px-5 py-2 bg-gray-300 rounded hover:bg-[#DB4444] hover:text-white transition-colors duration-500 ease-in-out"
//                             >
//                                 <Minus />
//                             </button>
//                             <span className="text-xl">{quantity}</span>
//                             <button
//                                 onClick={() => setQuantity(quantity + 1)}
//                                 className="px-5 py-2 bg-gray-300 rounded hover:bg-[#DB4444] hover:text-white transition-colors duration-500 ease-in-out"
//                             >
//                                 <Plus />
//                             </button>
//                         </span>
//                         <button className="px-5 py-2 bg-[#DB4444] rounded text-white">
//                             Add To Cart
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Related Products & Reviews */}
//             <RelatedProducts />
//             <ReviewForm />
//         </Container>
//     );
// }


"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Container from "../custom/Container";
import { RelatedProducts } from "./shop-utils/RelatedProduct";
import ReviewForm from "./shop-utils/Review&Rating";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";

export default function ProductDetails() {
    const product = {
        id: 1,
        name: "Wireless Headphones",
        price: 59.99,
        images: ["/p.jpg", "/2.png", "/3.png", "/4.png"],
        category: "Electronics",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione facere officia ex voluptatum, eligendi alias dignissimos quis quod laborum! Quod a adipisci quibusdam hic dignissimos ratione. Ipsam fugiat nisi consequuntur.",
        stock: 25,
        rating: 4.5,
        colors: ["#FF0000", "#0000FF", "#000000", "#FFFFFF"],
        sizes: ["S", "M", "L", "XL"],
    };

    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [quantity, setQuantity] = useState(1);

    return (
        <Container className="my-10">
            <div className="grid md:grid-cols-10 grid-cols-1 gap-6">
                <div className="md:h-[70vh] hidden md:order-none   h-full w-full md:grid grid-cols-4 md:grid-rows-4 md:grid-cols-1 gap-2 md:gap-4">
                    {product.images.map((img, index) => (
                        <Image
                            width={200}
                            height={200}
                            key={index}
                            src={img}
                            alt="Thumbnail"
                            className={`w-full bg-card h-full object-contain p-2 rounded-lg cursor-pointer border ${selectedImage === img ? "border-blue-600" : "border-boder"
                                }`}
                            onClick={() => setSelectedImage(img)}
                        />
                    ))}
                </div>

                <div className="h-[70vh] bg-card border rounded-lg md:col-span-5 flex items-center justify-center">
                    <motion.div
                        key={selectedImage}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <Image
                            width={500}
                            height={500}
                            src={selectedImage}
                            alt={product.name}
                            className="w-full h-auto md:h-full object-contain p-4"
                        />
                    </motion.div>
                </div>
                <div className="md:h-[70vh] md:order-none md:hidden h-full w-full grid grid-cols-4 md:grid-rows-4 md:grid-cols-1 gap-2 md:gap-4">
                    {product.images.map((img, index) => (
                        <Image
                            width={200}
                            height={200}
                            key={index}
                            src={img}
                            alt="Thumbnail"
                            className={`w-full h-full object-contain p-2 rounded-lg cursor-pointer border ${selectedImage === img ? "border-blue-600" : "border-yellow-300"
                                }`}
                            onClick={() => setSelectedImage(img)}
                        />
                    ))}
                </div>
                {/* Product Details */}
                <div className="h-auto md:h-[70vh] bg-card rounded-lg border p-5 md:col-span-4">
                    <h3 className="text-2xl md:text-4xl">{product.name}</h3>
                    <p className="text-yellow-500 my-2">
                        {"⭐".repeat(Math.round(product.rating))} ({product.rating})
                    </p>
                    <p className="text-xl md:text-2xl my-4">${product.price}</p>
                    <p className="mb-6 text-wrap w-full md:w-[75%] border-b-2 pb-4 border-black">
                        {product.description}
                    </p>

                    {/* Colors */}
                    {product.colors && (
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold">Colours</h3>
                            <div className="flex flex-wrap space-x-3 mt-2">
                                {product.colors.map((color, index) => (
                                    <div
                                        key={index}
                                        className={`w-8 h-8 rounded-full border-2 cursor-pointer ${selectedColor === color
                                            ? "border-red-500"
                                            : "border-gray-300"
                                            }`}
                                        style={{ backgroundColor: color }}
                                        onClick={() => setSelectedColor(color)}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Sizes */}
                    {product.sizes && (
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold">Size</h3>
                            <div className="flex flex-wrap space-x-3 mt-2">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        className={`px-4 py-2 rounded-lg border-2 ${selectedSize === size
                                            ? "bg-red-500 text-text border-red-500"
                                            : "border-gray-300 text-text"
                                            }`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}


                    <div className="flex items-center  flex-wrap space-x-4  mt-6">
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
                        <button className="px-5 py-2  md:mt-0 bg-[#DB4444] rounded text-white">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <RelatedProducts />
                <ReviewForm />
            </div>
        </Container>
    );
}
