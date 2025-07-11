import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhyLavaggio } from "@/components/sections/WhyLavaggio";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { About } from "@/components/sections/About";
import { CTA } from "@/components/sections/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <WhyLavaggio />
        <section id="services">
          <Services />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <Testimonials />
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <CTA />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
