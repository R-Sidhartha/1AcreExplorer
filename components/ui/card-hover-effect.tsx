import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import PropertyCard from "../property/PropertyCard";

export const HoverEffect = ({
    properties,
    className,
}: {
    properties: any[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10", className)}>
            {properties.map((property, idx) => (
                <div
                    key={property.id}
                    className="relative group block p-1 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-400 dark:bg-slate-400/[0.8] block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>

                    <Card>
                        <PropertyCard property={property} />
                    </Card>
                </div>
            ))}
        </div>
    );
};

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return (
        <div className={cn("rounded-2xl h-full w-full p-4 overflow-hidden bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-700 dark:shadow-md relative z-20", className)}>
            <div className="relative z-50">{children}</div>
        </div>
    );
};

export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return (
        <h4 className={cn("text-gray-900 dark:text-white font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
};

export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return (
        <p className={cn("mb-2 text-gray-600 dark:text-white tracking-wide leading-relaxed text-base font-semibold", className)}>
            {children}
        </p>
    );
};
