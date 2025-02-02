"use client"; 

import { useState } from "react";
import { FaRoad, FaPaintBrush, FaHardHat, FaRulerCombined, FaWheelchair } from "react-icons/fa";
import { MdConstruction, MdOutlineTraffic } from "react-icons/md";
import { RiPaintBrushFill } from "react-icons/ri";
import { PiShovelFill } from "react-icons/pi";

const services = [
  {
    name: "Asphalt",
    description: "Durable asphalt paving for roads, driveways, and parking lots.",
    icon: <FaRoad />,
  },
  {
    name: "Seal Coating",
    description: "Protective coating to extend the lifespan of asphalt surfaces.",
    icon: <FaPaintBrush />,
  },
  {
    name: "Concrete",
    description: "Quality concrete services for sidewalks, driveways, and structures.",
    icon: <FaHardHat />,
  },
  {
    name: "Grading",
    description: "Ensuring proper leveling and drainage for construction projects.",
    icon: <FaRulerCombined />,
  },
  {
    name: "Trenches",
    description: "Excavation and trenching services for utilities and drainage.",
    icon: <PiShovelFill />,
  },
  {
    name: "Handicap Ramps",
    description: "ADA-compliant ramps for accessibility and safety.",
    icon: <FaWheelchair />,
  },
  {
    name: "Crack Filler",
    description: "Effective solutions for repairing cracks and preventing deterioration.",
    icon: <MdConstruction />,
  },
  {
    name: "Striping",
    description: "Professional parking lot and road striping services.",
    icon: <RiPaintBrushFill />,
  },
];

const ServicesSection = ({
  showDiv = true,
  useWhiteBackground = false,
  hideTitle = false,
  enableCards = false, 
}) => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section
      className={`${useWhiteBackground ? "bg-white pb-12" : "bg-cover bg-fixed bg-center bg-no-repeat"}`}
      style={!useWhiteBackground ? { backgroundImage: "url('/Service_BG.jpeg')" } : {}}
    >
      <div className="p-8 flex h-full w-full flex-col items-center justify-center md:flex-row md:gap-8 gap-4">
        
        {/* First Column: Text Block */}
        {showDiv && (
          <div className="h-[440px] max-w-sm bg-black p-8 text-center font-kumbh_sans text-white md:w-1/2 flex items-center justify-center">
            <h1 className="mb-4 text-xl sm:text-3xl font-bold leading-relaxed">
              <span className="text-sand">At Asphalt Kings, </span>
              <span className="text-gold">we turn challenges into progress</span>
              <span className="text-sand">, from pothole-ridden streets to weather-worn asphalt.</span>
            </h1>
          </div>
        )}

        {/* Grid Layout for Services Cards */}
        {enableCards ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
            {services.map((service, index) => (
              <div
                key={index}
                className={`cursor-pointer p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center transition-all duration-300 ${
                  selectedService === service.name
                    ? "bg-gold text-white"
                    : "bg-white hover:bg-gold"
                }`}
                onClick={() =>
                  setSelectedService(selectedService === service.name ? null : service.name)
                }
              >
                <div className="text-5xl">{service.icon}</div>
                <h5 className="mt-4 text-xl font-bold">{service.name}</h5>
                <p className="text-gray-950 mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        ) : (
          // Table Layout (For Home Page)
          <div className="w-full max-w-lg md:w-1/2 divide-y divide-gray-300 rounded-lg bg-white font-alfarn font-bold flex flex-col shadow-lg">
            {!hideTitle && (
              <div className="bg-black px-4 py-3 text-center">
                <h5 className="text-gold">Asphalt Kings Services</h5>
              </div>
            )}
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex items-center justify-between px-4 py-3 ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                }`}
              >
                <h5 className="text-center w-full">{service.name}</h5>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
