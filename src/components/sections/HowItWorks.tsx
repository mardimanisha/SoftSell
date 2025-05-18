'use client';

import { motion } from 'framer-motion';
import { works } from '@/constants/works';

export const HowItWorks = () => {
  return (
    <section className="py-40 px-6 lg:px-8 bg-[var(--color-bg)]" id="how-it-works">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-[var(--color-secondary)]">How It Works</h2>
        <p className="mt-4 text-base sm:text-2xl text-[var(--color-muted)]">
          Selling your unused software licenses is simple and secure with our three-step process
        </p>
      </motion.div>

      <div className="flex flex-col sm:flex-row items-start sm:items-stretch justify-between gap-8 md:gap-16">
        {works.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex flex-col items-center text-center bg-[var(--color-bg-primary)] rounded-xl px-6 py-10 sm:py-20 shadow-md w-full sm:w-80 h-64 sm:h-fit relative"
          >
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[var(--color-bg-accent)] rounded-full">
              <step.icon className="w-6 h-6 text-lime-800" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-md font-semibold text-muted-foreground">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
};

{/*
  <section className="py-40 px-6 lg:px-8 bg-[var(--color-bg)]" id="how-it-works">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-base sm:text-2xl text-[var(--color-muted)]">
            Selling your unused software licenses is simple and secure with our three-step process
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-16">
          {works.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center bg-[var(--color-bg-primary)] rounded-xl px-6 py-20 shadow-md w-80 relative"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[var(--color-bg-accent)] rounded-full">
                <step.icon className="w-6 h-6 text-lime-800" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-md font-semibold text-[var(--color-muted)]">{step.description}</p>

          
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  */}