import Layout from "@/app/layout";
import HeroSection from "@/components/HeroSection";
import HomeOpener from "@/components/HomeOpener";
import ServicesHeading from "@/components/ServiceHeading";
import ServicesSection from "@/components/ServicesSection";
import EstimateForm from "@/components/EstimateForm";

export default function HomePage() {
  return (
    <>
      <HeroSection 
        bgImage="/Home_Hero.jpeg" 
        titlePart1="Delivering" 
        titlePart2="Excellence" 
      />
      <HomeOpener />
      <ServicesHeading
        ServiceHeading1="Asphalt"
        ServiceHeading2="Services"
      />
      <ServicesSection />
      <EstimateForm 
        title={
          <>
            PARTNERING WITH US IS <span className="text-cyan-950">HASSLE-FREE</span>
          </>
        }
        description={[
          "Fill out our form, and expect a response within 48 hours. We’ll connect with you to learn exactly what you need.",
          "Next, we’ll design a project plan that fits your goals. We’re committed to more than just getting the job done—we ensure precision and excellence in every detail."
        ]}
      />
    </>
  );
}
