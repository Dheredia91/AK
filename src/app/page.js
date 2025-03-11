import Layout from "@/app/layout";
import HeroSection from "@/components/HeroSection";
import HomeOpener from "@/components/HomeOpener";
import ServicesHeading from "@/components/ServiceHeading";
import ServicesSection from "@/components/ServicesSection";
import EstimateForm from "@/components/EstimateForm";
import { generateBlurDataURL } from "@/utils/generateBlur";

export default async function HomePage() {
  const blurDataURL = await generateBlurDataURL("/Home_Hero.jpeg");
  return (
    <>
      <head>
        <link rel="preload" as="image" href="/Home_Hero.jpeg" />
      </head>    
      <HeroSection 
        bgImage="/Home_Hero.jpeg"
        blurDataURL={blurDataURL} 
        titlePart1="Delivering" 
        titlePart2="Excellence"
        buttonText="Calculate Estimate"

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
