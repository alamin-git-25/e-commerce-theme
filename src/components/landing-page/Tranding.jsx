"use client";
import React, { useMemo, useState } from "react";
import Container from "../custom/Container";
import { SectionHeader } from "../custom/Heading";
import { motion } from "framer-motion";
import Offer from "./Offer";
import ProductCard from "../custom/card/ProductCard";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { useGetAllProductsQuery } from "@/redux/api/productApi";
import LoadingSpinner from "../hooks/Spinner";
import { toast } from "react-toastify";

export default function Tranding() {
    const [page, setPage] = useState(1);
    const limit = 12;

    const { data, isLoading, isFetching } = useGetAllProductsQuery(
        { page, limit },
        { refetchOnFocus: true, refetchOnMountOrArgChange: true }
    );

    const products = useMemo(() => data?.data || [], [data]);


    const totalPages = data?.totalPages || 1;
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
    const tabs = ["All", "Featured", "On sale", "Trending", "Top rated"];

    const handleTabChange = (tab) => {
        console.log(`Selected Tab: ${tab}`);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <Container>
            <SectionHeader title="Trending Products" tabs={tabs} onTabChange={handleTabChange} />
            <motion.section
                className="grid grid-cols-2 lg:grid-cols-4 md:gap-2 gap-1"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"

            >
                {isLoading && <LoadingSpinner />}
                {products.map((product, idx) => (

                    <ProductCard handleAddToCart={handleAddToCart} key={idx} product={product} />
                ))}
            </motion.section>
            <Offer />
        </Container>
    );
}


