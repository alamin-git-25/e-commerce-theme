"use client"
import React, { Suspense, useMemo, useState } from 'react'
import Container from '../custom/Container'
import ShopCategory from './shop-utils/ShopCategory'
import BrandsFilter from './shop-utils/Brands'
import PriceRangeFilter from './shop-utils/Price'
import Products from './shop-utils/Products'
import { LayoutGrid, List, SlidersHorizontal } from 'lucide-react'
import PageBanner from '../custom/PageBanner'
import MoabilFilter from './shop-utils/MoabilFilter'
import SearchBar from './shop-utils/Searchbar'
import { useGetAllProductsQuery, useGetEveryProductsQuery } from '@/redux/api/productApi'
import LoadingSpinner from '../hooks/Spinner'


export default function Shop() {
    const [isGridView, setIsGridView] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Products" }
    ];
    const { data: products, isLoading, isFetching } = useGetEveryProductsQuery(undefined, {
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })
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
                title="Products"
                breadcrumbs={breadcrumbs}
                backgroundImage="/p.jpg"
            />

            <Container className="my-5">
                <div className='grid md:grid-cols-4 grid-cols-1 gap-4'>
                    <div className='w-full h-screen md:block hidden'>
                        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <ShopCategory />
                        <BrandsFilter />
                        <PriceRangeFilter />
                    </div>
                    <div className='w-full h-screen col-span-3'>
                        <div className="flex h-12 justify-start items-center mb-4 space-x-2 md:ml-0 ml-3">
                            <button
                                className={`p-2 rounded transition-colors duration-300 ${isGridView ? "bg-button text-white" : "bg-gray-200"}`}
                                onClick={() => setIsGridView(true)}
                            >
                                <LayoutGrid className="w-5 h-5" />
                            </button>
                            <button
                                className={`p-2 rounded transition-colors duration-300 ${!isGridView ? "bg-button text-white" : "bg-gray-200"}`}
                                onClick={() => setIsGridView(false)}
                            >
                                <List className="w-5 h-5" />
                            </button>
                            <button
                                onClick={toggleMenu}
                                className="p-2 rounded md:hidden block   bg-button-foreground text-neutral-50"

                            >
                                <SlidersHorizontal className="w-5 h-5" />
                            </button>
                        </div>
                        <Suspense fallback={<p>loading...</p>}>
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
