"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { fetchProperties } from "@/lib/api";
import { HoverEffect } from "@/components/ui/card-hover-effect";

//skeleton for loading state
function SkeletonCard() {
    return (
        <div className="bg-gray-200 dark:bg-gray-700 rounded-xl p-4 animate-pulse">
            <div className="h-40 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
            <div className="mt-4 h-6 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="mt-2 h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
        </div>
    );
}

function SkeletonLoader() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {[...Array(4)].map((_, index) => (
                <SkeletonCard key={index} />
            ))}
        </div>
    );
}

export default function PropertyGrid() {
    const observerRef = useRef<HTMLDivElement | null>(null);

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery({
        queryKey: ["properties"],
        queryFn: ({ pageParam = 1 }) => fetchProperties(pageParam),
        initialPageParam: 1,
        getNextPageParam: (lastPage, pages) => (lastPage.next ? pages.length + 1 : undefined),
    });

    useEffect(() => {
        if (!observerRef.current || !hasNextPage) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    fetchNextPage();
                }
            },
            { threshold: 1.0 }
        );

        observer.observe(observerRef.current);
        return () => observer.disconnect();
    }, [hasNextPage, fetchNextPage]);

    return (
        <section className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold dark:text-white text-gray-900 text-center mb-2">Discover Your Dream Property</h2>
            <h3 className=" font-semibold dark:text-white text-gray-700 text-center mb-2">Seamless Property Discovery: Explore, Scroll & Invest with Ease!</h3>
            {status == "pending" ? (
                <SkeletonLoader />
            ) : status === "error" ? (
                <p className="text-center text-red-500">Failed to load properties.</p>
            ) : (
                <HoverEffect properties={data?.pages.flatMap((page) => page.results) || []} />
            )}

            {hasNextPage && (
                <div ref={observerRef} className="h-50 mt-6 flex justify-center">
                    {isFetchingNextPage && <SkeletonLoader />}
                </div>
            )}
        </section>
    );
}
