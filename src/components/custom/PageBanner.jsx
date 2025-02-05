"use client";
import React from "react";
import Link from "next/link";
import Container from "./Container";

const PageBanner = ({ title, breadcrumbs, backgroundImage }) => {
    return (
        <div className="w-full bg-gray-100 py-16 px-4 md:px-20 relative overflow-hidden">
            {/* Background Image */}
            <Container>
                <div
                    className="absolute top-0 right-0 h-full w-1/3 bg-no-repeat bg-contain bg-right"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                    }}
                ></div>

                {/* Title & Breadcrumbs */}
                <div className="relative z-10">
                    <h1 className="text-3xl font-bold text-black">{title}</h1>
                    <nav className="mt-2 text-gray-500 text-sm flex items-center space-x-2">
                        {breadcrumbs.map((item, index) => (
                            <span key={index} className="flex items-center">
                                {index > 0 && <span className="mx-1 text-gray-400">•</span>}
                                {item.href ? (
                                    <Link href={item.href} className="hover:underline">
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span className="font-medium text-black">{item.label}</span>
                                )}
                            </span>
                        ))}
                    </nav>
                </div>
            </Container>
        </div>
    );
};

export default PageBanner;
