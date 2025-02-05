"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShoppingCart, Heart, RefreshCcw } from 'lucide-react';
import Container from '../custom/Container';
import { SectionHeader } from '../custom/Heading';
import ProductCard from '../custom/card/ProductCard';

const products = [
    { id: 1, name: "Wireless Bluetooth Headphones", price: 59.99, category: "Featured", image: "/p.jpg", rating: 4.5 },
    { id: 2, name: "Smartwatch Series 6", price: 249.99, category: "Trending", image: "/p.jpg", rating: 4.7 },
    { id: 3, name: "4K Ultra HD Smart TV", price: 799.99, category: "Top rated", image: "/p.jpg", rating: 4.9 },
    { id: 4, name: "Portable Bluetooth Speaker", price: 29.99, category: "On sale", image: "/p.jpg", rating: 4.3 },
    { id: 5, name: "Gaming Laptop", price: 1299.99, category: "Featured", image: "/p.jpg", rating: 4.8 },
    { id: 6, name: "Noise Cancelling Earbuds", price: 99.99, category: "On sale", image: "/p.jpg", rating: 4.6 },
    { id: 7, name: "Digital SLR Camera", price: 499.99, category: "Trending", image: "/p.jpg", rating: 4.4 },
    { id: 8, name: "Smart Home Assistant", price: 89.99, category: "Top rated", image: "/p.jpg", rating: 4.7 },
];

export default function NewArrival() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const next = () => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % products.length);
    };

    const prev = () => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + products.length) % products.length);
    };

    const visibleProducts = products.slice(current, current + 4);
    if (visibleProducts.length < 4) {
        visibleProducts.push(...products.slice(0, 4 - visibleProducts.length));
    }

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0,
        }),
    };

    return (
        <Container className="md:grid hidden">
            <SectionHeader title="New Arrival" onNext={next} onPrev={prev} />
            <div className=" overflow-hidden">
                <div className="flex items-center gap-4 mt-4">
                    <div className="md:grid  md:grid-cols-4 gap-4 w-full overflow-hidden">
                        <AnimatePresence initial={false} custom={direction} mode="popLayout">
                            {visibleProducts.map((product) => (
                                <motion.div
                                    key={product.id}
                                    className=""
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.5 }}
                                >
                                    <ProductCard product={product} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </Container>
    );
}
