"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white shadow-t mt-10 p-6 text-center"
        >
            <div className="container mx-auto">
                <p className="text-gray-600 text-sm">
                    © {new Date().getFullYear()} 1Acre Explorer. All rights reserved.
                </p>
            </div>
        </motion.footer>
    );
}
