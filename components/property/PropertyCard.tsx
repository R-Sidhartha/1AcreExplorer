"use client";

import { Heart, Share2 } from "lucide-react";
import { useState } from "react";
import PropertyCarousel from "./PropertyCarousel";
import { Card, CardTitle, CardDescription } from "@/components/ui/card-hover-effect";
import { Property } from "@/types";

export default function PropertyCard({ property }: { property: Property }) {
    const [liked, setLiked] = useState(false);
    const priceData = property.land_price?.price_per_acre_crore;
    const pricePerAcre =
        (priceData?.crore ? `${priceData.crore} Cr ` : "") +
        (priceData?.lakh ? `${priceData.lakh} L` : "");

    const landSize = property.land_size?.total_land_size_in_acres;
    const formattedLandSize = `${landSize?.acres || 0} Acres ${landSize?.guntas || 0} Guntas`;

    return (
        <Card>
            <div className="relative">
                <PropertyCarousel images={property.land_media || []} />
                <div className="absolute top-2 right-2 flex space-x-2">
                    <button
                        className={`p-2 rounded-full transition-all ${liked ? "bg-red-100 text-red-600" : "bg-white dark:bg-gray-600 text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-500 cursor-pointer shadow-md"
                            }`}
                        onClick={() => setLiked(!liked)}
                    >
                        <Heart size={20} fill={liked ? "red" : "none"} />
                    </button>

                    <button className="p-2 rounded-full bg-white dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500 text-gray-600 shadow-md hover:bg-gray-200 transition-all cursor-pointer">
                        <Share2 size={20} />
                    </button>
                </div>
            </div>

            <div className="p-4">
                <CardTitle>
                    ₹ {pricePerAcre} / acre
                </CardTitle>
                <CardDescription>
                    {formattedLandSize}
                </CardDescription>
                <p className="text-gray-600 text-sm dark:text-white">
                    {property.division_info && property.division_info.length >= 3
                        ? `${property.division_info[3]?.name}, ${property.division_info[2]?.name}, ${property.division_info[1]?.name}`
                        : "Location not available"}
                </p>
            </div>
        </Card>
    );
}
