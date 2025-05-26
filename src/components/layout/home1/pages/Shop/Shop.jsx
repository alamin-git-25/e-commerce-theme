// "use client"
// import React, { Suspense, useMemo, useState } from 'react'

// import { useGetAllProductsQuery, useGetEveryProductsQuery } from '@/redux/api/productApi'
// import Container from '@/components/custom/Container'
// import PageBanner from '@/components/custom/PageBanner';
// import SearchBar from './shop-utils/Searchbar';
// import ShopCategory from './shop-utils/ShopCategory';
// import BrandsFilter from './shop-utils/Brands';
// import PriceRangeSlider from './shop-utils/Price';
// import { LayoutGrid, List, SlidersHorizontal } from 'lucide-react';
// import Products from './shop-utils/Products';
// import MoabilFilter from './shop-utils/MoabilFilter';



// export default function Shop() {
//     const [isGridView, setIsGridView] = useState(true);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [leftside, setLeftSide] = useState(false);
//     const [isOpen, setIsOpen] = useState(false);
//     const toggleMenu = () => setIsOpen(!isOpen);
//     const breadcrumbs = [
//         { label: "Home", href: "/" },
//         { label: "Products" }
//     ];
//     const { data: products, isLoading, isFetching } = useGetEveryProductsQuery(undefined, {
//         refetchOnFocus: true,
//         refetchOnMountOrArgChange: true
//     })
//     const filteredProducts = useMemo(() => {
//         if (!products) return [];
//         if (!searchTerm.trim()) return products;
//         return products?.filter(product =>
//             product?.name?.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//     }, [products, searchTerm]);
//     return (
//         <section>
//             <PageBanner
//                 title="Products"
//                 breadcrumbs={breadcrumbs}
//                 backgroundImage="/p.jpg"
//             />

//             <Container className="my-5">
//                 <div className='grid md:grid-cols-4 grid-cols-1 gap-4'>
//                     <div className='w-full h-screen md:block hidden'>
//                         <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
//                         <ShopCategory />
//                         <BrandsFilter />
//                         <PriceRangeSlider />
//                     </div>
//                     <div className='w-full h-screen col-span-3'>
//                         <div className="flex h-12 justify-start items-center mb-4 space-x-2 md:ml-0 ml-3">
//                             <button
//                                 className={`p-2 rounded transition-colors duration-300 ${isGridView ? "bg-button text-white" : "bg-gray-200"}`}
//                                 onClick={() => setIsGridView(true)}
//                             >
//                                 <LayoutGrid className="w-5 h-5" />
//                             </button>
//                             <button
//                                 className={`p-2 rounded transition-colors duration-300 ${!isGridView ? "bg-button text-white" : "bg-gray-200"}`}
//                                 onClick={() => setIsGridView(false)}
//                             >
//                                 <List className="w-5 h-5" />
//                             </button>
//                             <button
//                                 onClick={toggleMenu}
//                                 className="p-2 rounded md:hidden block   bg-button-foreground text-neutral-50"

//                             >
//                                 <SlidersHorizontal className="w-5 h-5" />
//                             </button>
//                         </div>
//                         <Suspense fallback={<p>loading...</p>}>
//                             <Products
//                                 products={filteredProducts}
//                                 isLoading={isLoading}
//                                 isFetching={isFetching}
//                                 isGridView={isGridView}
//                                 setIsGridView={setIsGridView} />
//                         </Suspense>
//                     </div>
//                 </div>
//             </Container>
//             <MoabilFilter isOpen={isOpen} toggleMenu={toggleMenu} />
//         </section>
//     )
// }

"use client";

import React, { Suspense, useMemo, useState } from "react";
import { useGetEveryProductsQuery } from "@/redux/api/productApi";
import Container from "@/components/custom/Container";
import PageBanner from "@/components/custom/PageBanner";
import SearchBar from "./shop-utils/Searchbar";
import ShopCategory from "./shop-utils/ShopCategory";
import BrandsFilter from "./shop-utils/Brands";
import PriceRangeSlider from "./shop-utils/Price";
import { LayoutGrid, List, PanelLeftClose, PanelLeftOpen, PanelTopOpen, SlidersHorizontal } from "lucide-react";
import Products from "./shop-utils/Products";
import MoabilFilter from "./shop-utils/MoabilFilter";

export default function Shop() {
    const [isGridView, setIsGridView] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterLeft, setFilterLeft] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(5000);

    const toggleMenu = () => setIsOpen(!isOpen);

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Products" },
    ];

    const { data: product, isLoading, isFetching } = useGetEveryProductsQuery(undefined, {
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
    });

    const searchProducts = () => {
        if (!product) return [];
        if (!searchTerm.trim()) return product;
        return product?.filter((product) =>
            product?.name?.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };
    const price = () => {
        if (!maxPrice) return [];
        if (!maxPrice) return product;
        return product?.filter((product) =>
            product?.price >= minPrice &&
            product?.price <= maxPrice
        );
    };
    const filteredProducts = searchProducts() && price();
    return (
        <section>
            <PageBanner title="Products" breadcrumbs={breadcrumbs} backgroundImage="/p.jpg" />

            <Container className="my-5">
                <div className={`grid md:grid-cols-4 grid-cols-1 gap-4`}>

                    <div className={`w-full   md:block hidden ${filterLeft && 'order-2'}`}>
                        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <ShopCategory />
                        <BrandsFilter />
                        <PriceRangeSlider />
                    </div>


                    <div className="w-full h-screen md:col-span-3 ">
                        <div className={`flex h-12 ${!filterLeft ? 'justify-start' : 'justify-end'} items-center mb-4 space-x-2 md:ml-0 ml-3`}>
                            <button
                                title="Grid View"
                                className={`p-2 rounded transition-colors duration-300 ${isGridView ? "bg-button text-white" : "bg-gray-200"
                                    }`}
                                onClick={() => setIsGridView(true)}
                            >
                                <LayoutGrid className="w-5 h-5" />
                            </button>
                            <button
                                title="Grid View"
                                className={`p-2 rounded transition-colors duration-300 ${!isGridView ? "bg-button text-white" : "bg-gray-200"
                                    }`}
                                onClick={() => setIsGridView(false)}
                            >
                                <List className="w-5 h-5" />
                            </button>
                            <button
                                className={`p-2 rounded transition-colors duration-300 ${!filterLeft ? "bg-button text-white" : "bg-gray-200"
                                    }`}
                                onClick={() => setFilterLeft(false)}
                            >
                                <PanelLeftClose className="w-5 h-5" />
                            </button>
                            <button
                                className={`p-2 rounded transition-colors duration-300 ${filterLeft ? "bg-button text-white" : "bg-gray-200"
                                    }`}
                                onClick={() => setFilterLeft(true)}
                            >
                                <PanelLeftOpen className="w-5 h-5" />
                            </button>
                            <button
                                onClick={toggleMenu}
                                className="p-2 rounded md:hidden block bg-button-foreground text-neutral-50"
                            >
                                <SlidersHorizontal className="w-5 h-5" />
                            </button>
                        </div>

                        <Suspense fallback={<p>Loading...</p>}>
                            <Products
                                products={filteredProducts}
                                isLoading={isLoading}
                                isFetching={isFetching}
                                isGridView={isGridView}
                                setIsGridView={setIsGridView}
                            />
                        </Suspense>
                    </div>


                </div>
            </Container>

            <MoabilFilter isOpen={isOpen} toggleMenu={toggleMenu} />
        </section>
    );
}
