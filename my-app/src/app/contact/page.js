import HeroSection from "@/components/HeroSection";
import EstimateForm from "@/components/EstimateForm";

export default function Contact() {
  return (
    <>
      <HeroSection 
        bgImage="/Contact.jpg" 
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
