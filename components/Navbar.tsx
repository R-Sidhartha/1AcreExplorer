"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md z-50"
        >
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <motion.h1
                    className="text-2xl font-bold text-lime-800"
                >
                    1Acre Explorer
                </motion.h1>

                <div className="hidden md:flex">
                    <DarkModeToggle />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6">
                    <NavLinks />
                </div>

                {/* Mobile Menu - ShadCN Sheet */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger>
                            <Menu size={28} />
                        </SheetTrigger>
                        <SheetContent side="left" className="bg-white">
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-4">Menu</h2>
                                <NavLinks mobile />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.nav>
    );
}

// Reusable Navigation Links Component
function NavLinks({ mobile }: { mobile?: boolean }) {
    const linkClasses = mobile
        ? "block text-lg py-2 hover:text-lime-700 text-lime-900 transition-all"
        : "hover:text-lime-700 text-lime-900 transition-all";

    return (
        <>
            <a href="/" className={linkClasses}>
                Home
            </a>
            <a href="/" className={linkClasses}>
                Properties
            </a>
            <a href="/" className={linkClasses}>
                Contact
            </a>
        </>
    );
}
