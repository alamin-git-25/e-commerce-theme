"use client"

import { useEffect, useMemo, useState } from "react";
import PageBanner from "../custom/PageBanner";
import Container from "../custom/Container";
import SearchBar from "../Shop/shop-utils/Searchbar";
import ShopCategory from "../Shop/shop-utils/ShopCategory";
import BrandsFilter from "../Shop/shop-utils/Brands";
import PriceRangeSlider from "../Shop/shop-utils/Price";
import { LayoutGrid, List, SlidersHorizontal } from "lucide-react";
import Products from "../Shop/shop-utils/Products";
import MoabilFilter from "../Shop/shop-utils/MoabilFilter";
import { useGetAllProductsQuery, useGetEveryProductsQuery } from "@/redux/api/productApi";

export default function Category({ category }) {
    const [isGridView, setIsGridView] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Products" }
    ];

    const { data, isLoading, isFetching } = useGetEveryProductsQuery(undefined, {
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })


    const products = useMemo(() => data?.filter((item) => item?.subCategory === category) || [], [data]);
    console.log(products);

    return (
        <section>
            <PageBanner
                title={category}
                breadcrumbs={breadcrumbs}
                backgroundImage="/p.jpg"
            />

            <Container className="my-5">
                <div className='grid md:grid-cols-4 grid-cols-1 gap-4'>
                    <div className='w-full h-screen md:block hidden'>
                        <SearchBar />
                        <ShopCategory />
                        <BrandsFilter />
                        <PriceRangeSlider />
                    </div>
                    <div className='w-full h-screen col-span-3'>
                        <div className="flex h-12 justify-start items-center mb-4 space-x-2 md:ml-0 ml-3">
                            <button
                                className={`p-2 rounded transition-colors duration-300 ${isGridView ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                                onClick={() => setIsGridView(true)}
                            >
                                <LayoutGrid className="w-5 h-5" />
                            </button>
                            <button
                                className={`p-2 rounded transition-colors duration-300 ${!isGridView ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                                onClick={() => setIsGridView(false)}
                            >
                                <List className="w-5 h-5" />
                            </button>
                            <button
                                onClick={toggleMenu}
                                className="p-2 rounded md:hidden block   bg-gray-800 text-neutral-50"

                            >
                                <SlidersHorizontal className="w-5 h-5" />
                            </button>
                        </div>
                        <Products
                            products={products}
                            isLoading={isLoading}
                            isFetching={isFetching}
                            isGridView={isGridView}
                            setIsGridView={setIsGridView} />
                    </div>
                </div>
            </Container>
            <MoabilFilter isOpen={isOpen} toggleMenu={toggleMenu} />
        </section>
    )
}



