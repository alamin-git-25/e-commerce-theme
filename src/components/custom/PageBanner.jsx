"use client";
import React from "react";
import Link from "next/link";
import Container from "./Container";
import Image from "next/image";

const PageBanner = ({ title, breadcrumbs, backgroundImage }) => {
    return (
        <div className="bg-gray-200 dark:bg-gray-600 py-5">
            {/* Background Image */}
            <Container className="relative  h-[20vh] w-full flex justify-between items-center">




                {/* Title & Breadcrumbs */}
                <div className="relative z-10">
                    <h1 className="text-3xl font-bold text-text">{title}</h1>
                    <nav className="mt-2 text-text text-sm flex items-center space-x-2">
                        {breadcrumbs.map((item, index) => (
                            <span key={index} className="flex items-center">
                                {index > 0 && <span className="mx-1 text-gray-400">•</span>}
                                {item.href ? (
                                    <Link href={item.href} className="hover:underline">
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span className="font-medium text-text">{item.label}</span>
                                )}
                            </span>
                        ))}
                    </nav>
                </div>
                <Image src="/icons/shoppingCard.png" width={250} height={250} alt="" />
            </Container>
        </div>
    );
};

export default PageBanner;
