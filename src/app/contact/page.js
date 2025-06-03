import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import EstimateForm from "@/components/EstimateForm";
import { generateBlurDataURL } from "@/utils/generateBlur";

export default async function Contact() {
  const blurDataURL = await generateBlurDataURL("/Contact.jpg");
  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/Contact.jpg" />
      </Head>   
      <HeroSection 
        bgImage="/Contact.jpg"
        blurDataURL={blurDataURL} 
        titlePart1="Contact" 
        titlePart2="Us" 
        showBadge={false}  
        showButton={false}
        showRibbon={false} 
      />
      <EstimateForm 
        title={
          <>
            <span className="text-cyan-950">Let’s Talk</span> About Your Project!
          </>
        }
        description={[
          "Whether you're still figuring things out or ready to get started, we’re here to help. Tell us what you have in mind, and we’ll work with you to make it happen.",
          "Submit the form for a personalized plan, and let’s get to work together!"
        ]}
      />
    </>
  );
}
