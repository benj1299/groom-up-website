import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import ForProsSection from "@/components/sections/ForProsSection";
import AppShowcaseSection from "@/components/sections/AppShowcaseSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CategoriesSection />
        <ForProsSection />
        <AppShowcaseSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
