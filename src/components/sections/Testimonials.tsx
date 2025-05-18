
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '@/constants/feedback';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      if (scrollRef.current) {
        const cardWidth = scrollRef.current.children[0]?.clientWidth || 0;
        const gap = 24; // Corresponds to gap-6 in Tailwind (1.5rem = 24px)
        scrollRef.current.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
       if (scrollRef.current) {
        const cardWidth = scrollRef.current.children[0]?.clientWidth || 0;
        const gap = 24; // Corresponds to gap-6
        scrollRef.current.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
      }
    }
  };
  
  // Effect to scroll to current index on desktop when currentIndex changes
  useEffect(() => {
    if (!isMobile && scrollRef.current) {
      const cardElement = scrollRef.current.children[currentIndex] as HTMLElement;
      if (cardElement) {
        const scrollAmount = cardElement.offsetLeft - scrollRef.current.offsetLeft;
        scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  }, [currentIndex, isMobile]);


  return (
    <section className="w-full px-4 py-16 md:py-24 text-center bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Customers Say</h2>
      <p className="mt-4 text-lg text-[var(--color-muted)] max-w-xl mx-auto">
        Trusted by IT professionals and businesses of all sizes
      </p>

      {isMobile ? (
        // Mobile: Vertical stacked cards
        <div className="mt-10 flex flex-col items-center gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="w-full max-w-md"
            >
              <Card className="text-left shadow-lg">
                <CardHeader>
                  <div className="flex flex-row items-start gap-4">
                    <Avatar className="h-12 w-12 bg-accent text-accent-foreground mt-1">
                      <AvatarFallback className="text-lg bg-accent text-accent-foreground">{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex gap-0.5 mb-1.5">
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                          ))}
                        {Array(5 - testimonial.rating)
                          .fill(0)
                          .map((_, i) => (
                             <Star key={i + testimonial.rating} className="h-5 w-5 text-accent" />
                          ))}
                      </div>
                      <p className="italic text-sm text-muted-foreground leading-relaxed">{testimonial.feedback}</p>
                      <div className='mt-3'>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        // Desktop: Horizontal scroll with arrows below
        <div className="mt-12 flex flex-col items-center w-full">
          <div className="w-full max-w-5xl relative">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scroll-smooth transition-all px-2 pb-4 scrollbar-hide"
              
            >
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="min-w-[calc(50%-1.5rem)] md:min-w-[calc(33.333%-1rem)] lg:min-w-[calc(33.333%-1rem)] snap-start" // Adjust card width for 2 or 3 cards
                >
                  <Card className="w-full h-full flex flex-col text-left shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <CardHeader className="flex-grow">
                      <div className="flex flex-row items-start gap-4">
                        <Avatar className="h-14 w-14 bg-[var(--color-accent)] text-black mt-1">
                           <AvatarFallback className="text-xl bg-[var(--color-accent)] text-black">{testimonial.initials}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex gap-0.5 mb-1.5">
                            {Array(testimonial.rating)
                              .fill(0)
                              .map((_, i) => (
                                <Star key={i} className="h-5 w-5 text-[var(--color-accent)] fill-[var(--color-accent)]" />
                              ))}
                            {Array(5 - testimonial.rating)
                              .fill(0)
                              .map((_, i) => (
                                <Star key={i + testimonial.rating} className="h-5 w-5 text-accent" />
                              ))}
                          </div>
                          <p className="italic text-base text-muted-foreground leading-relaxed line-clamp-5">{testimonial.feedback}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-2 mt-auto">
                       <div className="ml-[calc(3.5rem+1rem)]"> {/* Aligns with text block, considering avatar and gap */}
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-[var(--color-muted)]">{testimonial.position}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
             {/* Hide scrollbar using webkit specific selector */}
            <style jsx>{`
              .overflow-x-auto::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>

          {/* Arrow Controls Below */}
          {testimonials.length > (isMobile ? 0 : 3) && ( // Show arrows if more than 3 cards on desktop
             <div className="flex gap-4 mt-8">
                <Button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  variant="outline"
                  size="icon"
                  aria-label="Previous testimonial"
                  
                >
                  <ArrowLeft />
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={currentIndex >= testimonials.length - (isMobile ? 1 : 3) } // Adjust based on visible cards
                  variant="outline"
                  size="icon"
                  aria-label="Next testimonial"
                  
                >
                  <ArrowRight />
                </Button>
              </div>
          )}
        </div>
      )}
    </section>
  );
}


{/*
  'use client';

import { useEffect, useRef, useState } from 'react';
import {  motion } from 'framer-motion';
import { testimonials } from '@/constants/feedback';
import { Button } from '@/components/ui/button';
import { Card, CardHeader } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <section className="w-full px-4 py-10 md:py-20 text-center bg-white">
      <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
      <p className="mt-4 text-base sm:text-2xl text-[var(--color-muted)]">Trusted by IT professionals and businesses of all sizes</p>

      {isMobile ? (
        // Mobile: Vertical stacked cards
        <div className="mt-10 flex flex-col items-center gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="w-96 border-2">
                    <CardHeader>
                      <div className='flex flex-row items-start gap-6'>
                        <div className="bg-lime-300 rounded-full mt-6 h-8 w-30 flex items-center justify-center font-bold text-white">
                          {testimonials[currentIndex].initials}
                        </div>

                        <div className='flex flex-col text-left'>
                          <div className="flex gap-1 mb-1 text-lime-500">
                            {Array(testimonials[currentIndex].rating)
                              .fill(0)
                              .map((_, i) => (
                                <span key={i}>★</span>
                              ))}
                          </div>

                          <p className="italic text-sm">{testimonials[currentIndex].feedback}</p>

                          <div className='mt-2'>
                            <p className="font-semibold">{testimonials[currentIndex].name}</p>
                            <p className="text-sm text-gray-400">{testimonials[currentIndex].position}</p>
                          </div>
                        </div>
                      </div>
                  </CardHeader>
                </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        
        // Desktop: Horizontal scroll with arrows below
                                           
// Desktop: Horizontal scroll with arrows below
<div className="mt-10 flex flex-col items-center w-full">
  <div
    ref={scrollRef}
    className="flex gap-6 overflow-x-auto scroll-smooth transition-all w-full max-w-5xl px-2 scrollbar-hide"
  >
    {testimonials.map((testimonial, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="min-w-full"
      >
        <Card className="w-full py-8">
          <CardHeader>
            <div className="flex flex-row items-start gap-6">
              <div className="bg-lime-300 rounded-full mt-12 h-16 w-28 flex items-center justify-center font-bold text-2xl text-white">
                {testimonial.initials}
              </div>

              <div className="flex flex-col text-left">
                <div className="flex gap-1 mb-1 text-lime-500">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-3xl">★</span>
                    ))}
                </div>

                <p className="italic text-xl">{testimonial.feedback}</p>

                <div className="mt-2">
                  <p className="font-semibold text-xl">{testimonial.name}</p>
                  <p className="text-xl text-[var(--color-muted)]">{testimonial.position}</p>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </motion.div>
    ))}
  </div>


  <div className="flex gap-4 mt-6">
    <Button
      onClick={() => {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
          scrollRef.current?.scrollBy({ left: -scrollRef.current.offsetWidth, behavior: 'smooth' });
        }
      }}
      disabled={currentIndex === 0}
      variant="outline"
      size="icon"
    >
      <ArrowLeft />
    </Button>
    <Button
      onClick={() => {
        if (currentIndex < testimonials.length - 1) {
          setCurrentIndex(currentIndex + 1);
          scrollRef.current?.scrollBy({ left: scrollRef.current.offsetWidth, behavior: 'smooth' });
        }
      }}
      disabled={currentIndex === testimonials.length - 1}
      variant="outline"
      size="icon"
    >
      <ArrowRight />
    </Button>
  </div>
</div>



      )}
    </section>
  );
};

export default Testimonials;
 */}