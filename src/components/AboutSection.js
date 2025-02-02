import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto w-[95%] lg:w-[100%] px-8 py-6 lg:py-16 lg:grid lg:grid-cols-2 lg:items-center">
        
        {/* Left Column – Text */}
        <div className="flex flex-col justify-between items-center sm:items-start text-center sm:text-left">
          {/* Heading */}
          <h2 className="text-4xl font-extrabold tracking-tight mb-4">
            Built on Trust, <span className="text-gold">Delivered with Precision</span>
          </h2>

          {/* Text Content */}
          <div className="pr-0 sm:pr-10">
            <p className="text-lg text-gray-800 leading-relaxed">
              At Asphalt Kings, we handle everything from private driveways to city-wide paving projects with precision and efficiency. 
              No matter the scale, our commitment to quality remains the same.
            </p>

            {/* Commitment Tagline */}
            <h3 className="text-2xl font-extrabold tracking-tight mt-6 mb-4 text-cyan-950">
              What We Stand For?
            </h3>
            <p className="text-lg text-gray-800 leading-relaxed">
              We value honesty. That’s why every client gets a <strong>detailed bid upfront</strong>, ensuring full clarity on what’s covered—and what’s not. 
              No surprises, just <strong>trust, quality, and exceptional results</strong>.
            </p>
          </div>
        </div>
        
        {/* Right Column – Image (Formatted Similar to Home_Opener.js) */}
        <div className="relative flex justify-center max-h-[515px] pt-4 lg:pt-0">
          <Image
            src="/Commitment.jpeg"
            alt="Excavation Commitment Image"
            width={500}  
            height={334}
            className="w-full h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
