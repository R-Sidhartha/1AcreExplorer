"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchPropertyLocations } from "@/lib/api";
import Map from "./Map";

export default function MapClient() {
    // Fetch property locations using React Query
    const { data: properties } = useQuery({
        queryKey: ["property-locations"],
        queryFn: fetchPropertyLocations,
    });
    return <Map properties={properties?.results || []} />;
}
