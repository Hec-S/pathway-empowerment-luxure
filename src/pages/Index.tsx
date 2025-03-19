
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DiscoverySection from "@/components/DiscoverySection";
import MonetizationHub from "@/components/MonetizationHub";
import SuccessStories from "@/components/SuccessStories";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <DiscoverySection />
      <MonetizationHub />
      <SuccessStories />
      <Footer />
    </div>
  );
};

export default Index;
