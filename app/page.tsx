import Hero from "@/components/sections/Hero";
import HappyCustomers from "@/components/sections/HappyCustomers";
import Features from "@/components/sections/Features";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <HappyCustomers />
      <Features />
      <FAQ />
      <CTA />
    </main>
  );
}
