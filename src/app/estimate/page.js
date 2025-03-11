import HeroSection from "@/components/HeroSection";
import EstimateCalc from "@/components/EstimateCalc";
import FAQ from "@/components/FAQ";
import Closer from "@/components/Closer";
import { generateBlurDataURL } from "@/utils/generateBlur";


export default async function Estimate() {
  const blurDataURL = await generateBlurDataURL("/Estimate.jpg");
  return (
    <>
      <head>
        <link rel="preload" as="image" href="/Estimate.jpg" />
      </head>   
      <HeroSection 
        bgImage="/Estimate.jpg"
        blurDataURL={blurDataURL} 
        titlePart1="Estimate" 
        titlePart2="Calculator" 
        showBadge={false}  
        showButton={false}
        showRibbon={false} 
      />

      <EstimateCalc />
      <FAQ />
      <Closer
        buttonText = "Get Estimate"
      />
    </>
  );
}
