"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Container from "../custom/Container";
import { SectionHeader } from "../custom/Heading";
import Link from "next/link";
import { useGetCategoriesQuery } from "@/redux/api/categoryApi";
import Image from "next/image";

export function Category() {
    const { data: categories, isLoading } = useGetCategoriesQuery(undefined, {
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })
    const [index, setIndex] = useState(0);
    const visibleCards = 4;

    const handleNext = () => setIndex((prev) => (prev + 1) % categories.length);
    const handlePrev = () => setIndex((prev) => (prev - 1 + categories.length) % categories.length);

    return (
        <Container>
            <div className="relative w-full mx-auto mt-10 overflow-hidden">
                <SectionHeader title="Categories" onNext={handleNext} onPrev={handlePrev} />
                <div className="relative overflow-hidden py-5">
                    <motion.div className="flex gap-4 cursor-grab" initial={{ x: 0 }} animate={{ x: `-${index * (100 / visibleCards)}%` }} transition={{ type: "spring", stiffness: 100, damping: 15 }} drag="x" dragConstraints={{ left: -500, right: 0 }} whileTap={{ cursor: "grabbing" }}>
                        {categories?.length > 0 ? (
                            categories?.flatMap((category, categoryIndex) =>
                                (category?.subCategories?.length > 0 ? category?.subCategories : [category])?.map((item, subCategoryIndex) => (
                                    <motion.div
                                        key={`${categoryIndex}-${subCategoryIndex}`} // Unique key combining category and subCategory index

                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <Link className="flex flex-col items-center justify-center md:w-40 w-20 md:h-40 h-20 bg-card shadow-md rounded-full p-4 md:min-w-40 min-w-20"
                                            href={`/categories/${item?.name}`}
                                        >
                                            <div className="text-4xl mb-2">
                                                <Image src={item?.icon} width={60} height={60} alt={item?.name} />
                                            </div>
                                            <h3 className="text-sm font-semibold text-center md:block hidden">{item?.name}</h3>
                                        </Link>
                                    </motion.div>
                                ))
                            )
                        ) : (
                            <p>No categories found.</p>
                        )}
                    </motion.div>
                </div>
            </div>
        </Container>
    );
}


