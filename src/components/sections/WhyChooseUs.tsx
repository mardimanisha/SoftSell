
"use client";

import { chooseUsData } from "@/constants/choose";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // ShadCN Card

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-bg)]" id="why-choose-us">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-[var(--color-secondary)]"
        >
          Why Choose SoftSell
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-base sm:text-2xl text-[var(--color-muted)]"
        >
          We&apos;re not just another software reseller. Here’s what makes us different.
        </motion.p>

        <div className="mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {chooseUsData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Card className="flex flex-col sm:items-start text-center border-none sm:text-left h-full w-fit bg-[var(--color-bg-primary)] hover:shadow-xl transition-shadow duration-300">
                            <CardHeader className="items-center sm:items-start w-full">
                                <div className="mb-3 flex items-center justify-center sm:justify-start">
                                    <item.icon className="w-8 h-8 text-lime-800" />
                                </div>
                                <CardTitle className="text-xl font-semibold text-black w-full">
                                    {item.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="">
                                <p className="text-muted-foreground text-md">
                                    {item.description}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
           </div>
        </div>

      </div>
    </section>
  );
}


{/*
  <section className="py-40 px-4 lg:px-8 bg-[var(--color-bg)]" id="why-choose-us">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Why Choose SoftSell
        </h2>
        <p className="mt-4 text-base sm:text-2xl text-[var(--color-muted)]">
          We&apos;re not just another software reseller. Here’s what makes us different.
        </p>

        <div className="mt-10">
            <div className=" mx-auto grid grid-cols-2 lg:grid-cols-4 gap-x-6 sm:gap-x-28 gap-y-8">
                {chooseUsData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-start items-center sm:items-start bg-[var(--color-bg-primary)] px-4 py-6 sm:px-6 sm:py-8 rounded-xl shadow-sm h-full w-fit sm:w-80"
                    >
                        <div className="mb-4 flex items-center justify-center sm:justify-start w-full">
                            <item.icon className="w-8 h-8 text-lime-800" />
                        </div>
                        <h3 className="font-semibold text-gray-900 text-center sm:text-left text-md sm:text-2xl mb-2">
                            {item.title}
                        </h3>
                        <p className="text-[var(--color-muted)] text-xs sm:text-base sm:font-medium text-center sm:text-left">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
           </div>
        </div>

      </div>
    </section>
   */}
