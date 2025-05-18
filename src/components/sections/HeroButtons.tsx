'use client'

import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function HeroButtons() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 text-[var(--color-accent)]"
        >
            <Button className="bg-black text-[var(--color-accent)] border border-black hover:bg-[var(--color-accent)] hover:text-black hover:border hover:border-black cursor-pointer px-12 py-6  transition-all">Sell My License</Button>
            <Button variant="outline" className="px-12 py-6 border bg-[var(--color-accent)] border-[var(--color-primary)] text-black hover:bg-[var(--color-primary)] hover:text-[var(--color-accent)] cursor-pointer transition-all">How it work →</Button>
        </motion.div>
    )
}
