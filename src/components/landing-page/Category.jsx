"use client"
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "../custom/Container";
import { Box, Camera, Cpu, Gift, Globe, Headphones, Smartphone, Tv, Utensils } from "lucide-react";


const categories = [
    { name: "New Arrivals", icon: <Box className="size-12" /> },
    { name: "Electronics", icon: <Cpu className="size-12" /> },
    { name: "Gifts", icon: <Gift className="size-12" /> },
    { name: "Computers", icon: <Cpu className="size-12" /> },
    { name: "Smartphones & Tablets", icon: <Smartphone className="size-12" /> },
    { name: "TV, Video & Music", icon: <Tv className="size-12" /> },
    { name: "Cameras", icon: <Camera className="size-12" /> },
    { name: "Cooking", icon: <Utensils className="size-12" /> },
    { name: "Accessories", icon: <Box className="size-12" /> },
    { name: "Sports", icon: <Globe className="size-12" /> },
    { name: "Electronic Gadgets", icon: <Headphones className="size-12" /> }
];

export function Category() {
    return (
        <Container>


            <Carousel className="relative w-full">
                <div className="absolute top-0 right-10 flex justify-between items-center my-8">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
                <CarouselContent className="w-full">
                    {categories.map((category, index) => (
                        <CarouselItem key={index} className="basis-1/2 md:basis-1/3  my-20 lg:basis-1/5">
                            <div className="w-full">
                                <Card className="border-none shadow">
                                    <CardContent className="flex flex-col items-center justify-center p-4">
                                        <div className="w-24 h-24 bg- rounded-full flex items-center justify-center mb-4">
                                            {category.icon}
                                        </div>
                                        <h3 className="text-sm font-semibold text-center">
                                            {category.name}
                                        </h3>

                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </Container>
    );
}
