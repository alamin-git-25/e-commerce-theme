"use client"

import { Suspense, useEffect, useMemo, useState } from "react";

import { useGetAllProductsQuery, useGetEveryProductsQuery } from "@/redux/api/productApi";
import PageBanner from "@/components/custom/PageBanner";
import Container from "@/components/custom/Container";
import SearchBar from "../Shop/shop-utils/Searchbar";
import ShopCategory from "../Shop/shop-utils/ShopCategory";
import BrandsFilter from "../Shop/shop-utils/Brands";
import PriceRangeSlider from "../Shop/shop-utils/Price";
import { LayoutGrid, List, SlidersHorizontal } from "lucide-react";
import Products from "../Shop/shop-utils/Products";
import MoabilFilter from "../Shop/shop-utils/MoabilFilter";

export default function Category({ category }) {
    const [isGridView, setIsGridView] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
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
    const filteredProducts = useMemo(() => {
        if (!products) return [];
        if (!searchTerm.trim()) return products;
        return products?.filter(product =>
            product?.name?.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [products, searchTerm]);

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
                        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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
                        <Suspense fallback={<p>loading..</p>}>
                            <Products
                                products={filteredProducts}
                                isLoading={isLoading}
                                isFetching={isFetching}
                                isGridView={isGridView}
                                setIsGridView={setIsGridView} />
                        </Suspense>
                    </div>
                </div>
            </Container>
            <MoabilFilter isOpen={isOpen} toggleMenu={toggleMenu} />
        </section>
    )
}



