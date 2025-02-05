"use client"
import React, { useState } from 'react'
import Container from '../custom/Container'
import SearchBar from './Searchbar'
import ShopCategory from './shop-utils/ShopCategory'
import BrandsFilter from './shop-utils/Brands'
import PriceRangeFilter from './shop-utils/Price'
import Products from './shop-utils/Products'
import { Grid2X2, LayoutGrid, List } from 'lucide-react'
import PageBanner from '../custom/PageBanner'



export default function Shop() {
    const [isGridView, setIsGridView] = useState(true);
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Products" }
    ];
    return (
        <section>
            <PageBanner
                title="Products"
                breadcrumbs={breadcrumbs}
                backgroundImage="/p.jpg" // Replace with your actual image path
            />
            <Container className="my-5">
                <div className='grid grid-cols-4 gap-4'>
                    <div className='w-full h-screen '>
                        <SearchBar />
                        <ShopCategory />
                        <BrandsFilter />
                        <PriceRangeFilter />
                    </div>
                    <div className='w-full h-screen col-span-3'>
                        <div className="flex h-12 justify-start items-center mb-4 space-x-2">
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
                        </div>
                        <Products isGridView={isGridView} setIsGridView={setIsGridView} />
                    </div>
                </div>
            </Container>
        </section>
    )
}
