// pages/gallery/page.js
import HeroSection from "@/components/HeroSection";
import GalleryCard from "@/components/GalleryCard";

const images = [
  { src: "/Before.jpg", alt: "Gallery Image 1" },
  { src: "/StripingLot.jpg", alt: "Gallery Image 2" },
  { src: "/ParkingLotStriping.jpg", alt: "Gallery Image 3" },
  { src: "/LotStripe.jpg", alt: "Gallery Image 4" },
  { src: "/CrackFilling.jpg", alt: "Gallery Image 5" },
  { src: "/HandicapStripe.jpg", alt: "Gallery Image 6" },
  { src: "/RedZoneStripe.jpg", alt: "Gallery Image 7" },
  { src: "/HandicapStriping.jpg", alt: "Gallery Image 8" },
  { src: "/HandicapStripingLot.jpg", alt: "Gallery Image 9" },
  { src: "/AsphaltPatch.jpeg", alt: "Gallery Image 10" },
  { src: "/RedStripe.jpeg", alt: "Gallery Image 11" },
  { src: "/Trench.jpeg", alt: "Gallery Image 12" },
  { src: "/RollerTrench.jpeg", alt: "Gallery Image 13" },
  { src: "/SealCoating.jpeg", alt: "Gallery Image 14" },
  { src: "/RollerTrenchCompacting.jpeg", alt: "Gallery Image 15" },
  { src: "/PatchCompacting.jpeg", alt: "Gallery Image 16" },
  { src: "/RollerCompactTrench.jpeg", alt: "Gallery Image 17" },
  { src: "/PatchCompactRoller.jpeg", alt: "Gallery Image 18" },

];

export default function GalleryPage() {
  return (
    <>
      <HeroSection 
        bgImage="/GalleryCard.jpg" 
        titlePart1="Check Out" 
        titlePart2="Our Work" 
        showBadge={false}  
        showButton={false}
        showRibbon={false} 
      />
      <GalleryCard images={images} />
    </>
  );
}
