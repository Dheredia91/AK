import Layout from "@/app/layout";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesHeading from "@/components/ServiceHeading";
import ServicesSection from "@/components/ServicesSection";
import EstimateForm from "@/components/EstimateForm";

export default function ServicesPage() {
  return (
    <>
      <HeroSection 
        bgImage="/Services_Hero.jpg" 
        titlePart1="Paving Services" 
        titlePart2="Reliable, Long-Lasting Asphalt Solutions" 
        showBadge={false}  
        showButton={false}
        showRibbon={false}
      />
      <AboutSection />
      <ServicesHeading
        ServiceHeading1="Asphalt Services"
        ServiceHeading2="We Offer"
        showSubHeading={false}
        ServiceClass1="px-2"
      />
      <ServicesSection
        showDiv={false}
        useWhiteBackground={true}
        hideTitle={true}
        enableCards={true}
      />
      <EstimateForm 
        title={
          <>
            <span className="text-cyan-950">Kickstart</span> Your Project Today
          </>
        }
        description={[
          "Get in touch now!",
          "Complete the form for a free estimate, and our team will follow up within 48 hours to discuss the details."
        ]}
      />
    </>
  );
}
