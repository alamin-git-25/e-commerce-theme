"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "../../../../custom/Container";
import { OfferBanner, OfferCard } from "../../../../custom/card/OfferCard";
import { products } from "@/lib/data/productData";

export default function Offer() {
    const offer = products?.find((item) => item.status === 'Offer');
    const offers = products?.filter((item) => item.status === 'subOffer');

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % offer?.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [offer?.length]);

    return (
        <Container className="grid gap-3 my-10 grid-cols-1 md:grid-cols-3">

            <div className="col-span-1 md:col-span-2 md:h-[60vh] h-full  relative rounded-xl w-full">
                <motion.div
                    className="w-full h-full rounded-xl "
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <OfferBanner title={offer?.name} price={offer?.price} description={offer?.description} image={offer.images[0]} />
                </motion.div>
            </div>

            <motion.div className="grid grid-rows-2 gap-3 md:h-[60vh] h-full">
                <motion.div
                    className="w-full rounded-xl "
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <OfferCard title={offers[0]?.name} price={offers[0]?.price} description={offers[0]?.description} image={offers[0]?.images[0]} />
                </motion.div>
                <motion.div
                    className="w-full rounded-xl "
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <OfferCard title={offers[1]?.name} price={offers[1]?.price} description={offers[1]?.description} image={offers[1]?.images[0]} />
                </motion.div>
            </motion.div>
        </Container>

    );
}
