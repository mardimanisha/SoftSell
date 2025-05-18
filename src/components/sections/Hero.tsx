"use client";

import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";

export default function Hero() {
  return (
    <section id="hero" className="h-screen p-4">
      <div className="h-screen bg-[var(--color-bg-primary)] px-4 rounded-xl shadow-xl border border-border relative">
        {/* Dark mode gradient effect */}
        <div className="absolute inset-0 m-auto w-[30rem] h-[30rem] dark:bg-[radial-gradient(circle,rgba(var(--hero-gradient-start-rgb),0.1)_0%,rgba(var(--hero-gradient-end-rgb),0)_70%)] rounded-full blur-3xl pointer-events-none hidden dark:block"></div>
        
        <div className="mx-auto my-40 sm:my-28 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-7xl font-extrabold text-foreground leading-tight"
          >
            Maximize the Value of Your <br className="hidden sm:block" />
            Unused Software Licenses
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl font-semibold text-center mx-auto text-muted-foreground mt-4 mb-16 text-base sm:text-2xl"
          >
            Turn your dormant software assets into cash. SoftSell makes selling unused licenses simple, secure, and profitable.
          </motion.p>

          <HeroButtons />
        </div>
      </div>
    </section>
  );
}

{/* 
        <section className="h-screen p-4">
            <div className="h-full bg-[var(--color-bg-primary)] py-20 px-4  rounded-xl">
            <div className="mx-auto my-40 sm:my-28 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-7xl font-extrabold text-black leading-tight"
                >
                    Maximize the Value of Your <br className="hidden sm:block" />
                    Unused Software Licenses
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl font-semibold text-center mx-auto text-[var(--color-muted)] mt-4 mb-16 text-base sm:text-2xl"
                >
                    Turn your dormant software assets into cash. SoftSell makes selling unused licenses simple, secure, and profitable.
                </motion.p>

                <HeroButtons />
            </div>
            </div>
        </section>
        */}
