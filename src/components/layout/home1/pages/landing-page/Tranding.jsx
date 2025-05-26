"use client";

import React, { useMemo, useState } from "react";
import Container from "../../../../custom/Container";
import { SectionHeader } from "../../../../custom/Heading";
import { motion, AnimatePresence } from "framer-motion";
import Offer from "./Offer";
import ProductCard from "../../../../custom/card/ProductCard";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { useGetEveryProductsQuery } from "@/redux/api/productApi";
import LoadingSpinner from "../../../../ui/Spinner";
import { toast } from "react-toastify";

export default function Tranding() {
    const { data, isLoading, isFetching } = useGetEveryProductsQuery(undefined, {
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
    });

    const products = useMemo(() => data || [], [data]);

    const [activeTab, setActiveTab] = useState(1);
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
        toast.success(`${product?.name} added to cart!`);
    };

    const tabs = ["All", "Featured", "On sale", "Trending", "Top rated"];

    const filteredProducts = {
        1: products?.filter((item) => item.status === 'All'),
        2: products?.filter((item) => item.status === 'Featured'),
        3: products?.filter((item) => item.status === 'On sale'),
        4: products?.filter((item) => item.status === 'Trending'),
        5: products?.filter((item) => item.status === 'Top rated'),
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: "easeIn" } },
    };
    return (
        <Container>
            <SectionHeader
                title="Trending Products"
                tabs={tabs}
                onTabChange={setActiveTab}
                activeTab={activeTab}
            />
            {isLoading && <LoadingSpinner />}
            <motion.section className="relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="grid grid-cols-2 lg:grid-cols-4 md:gap-2 gap-1"
                    >
                        {filteredProducts[activeTab]?.map((product, idx) => (
                            <ProductCard handleAddToCart={handleAddToCart} key={idx} product={product} />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </motion.section>


        </Container>
    );
}
