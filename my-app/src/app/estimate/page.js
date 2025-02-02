import HeroSection from "@/components/HeroSection";
import EstimateCalc from "@/components/EstimateCalc";
import FAQ from "@/components/FAQ";
import Closer from "@/components/Closer";


export default function Estimate() {
  return (
    <>
      <HeroSection 
        bgImage="/Estimate.jpg" 
        titlePart1="Estimate" 
        titlePart2="Calculator" 
        showBadge={false}  
        showButton={false}
        showRibbon={false} 
      />

      <EstimateCalc />
      <FAQ />
      <Closer />
    </>
  );
}
