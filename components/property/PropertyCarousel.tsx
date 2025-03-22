"use client";

import { useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { ImageObject } from "@/types";


export default function PropertyCarousel({ images }: { images: ImageObject[] }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative w-full max-w-lg mx-auto group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Carousel className="w-full">
                <CarouselContent>
                    {images.map((img, index) => (
                        <CarouselItem key={img.id} className="relative h-56 w-full">
                            <Image
                                src={img.image}
                                alt={`Property Image ${index + 1}`}
                                fill
                                className="rounded-lg object-cover"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Prev & Next Buttons - Appear on Hover */}
                {isHovered && (
                    <>
                        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white hover:bg-black/60 transition-opacity opacity-0 group-hover:opacity-100" />
                        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white hover:bg-black/60 transition-opacity opacity-0 group-hover:opacity-100" />
                    </>
                )}
            </Carousel>
        </div>
    );
}
