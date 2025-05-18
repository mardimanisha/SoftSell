import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/WhyChooseUs";


export default function Home() {
  return (
    <div className="bg-[var(--color-bg)] flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
