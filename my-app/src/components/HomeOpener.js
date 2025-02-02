import Image from "next/image";

const HomeOpener = () => {
  return (
    <section className="bg-white py-10 font-sans">
      <div className="mx-auto w-[95%] lg:w-[100%] px-8 py-6 lg:py-16 lg:grid lg:grid-cols-2 lg:items-center">
        
        {/* Left Column – Image */}
        <div className="relative flex justify-center max-h-[515px]">
          <Image
            src="/Home_Opener.jpg"
            alt="Freshly paved surface"
            width={3300}
            height={2200}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Column – Text (Height = 3/4 of Image) */}
        <div className="flex flex-col items-center text-center mt-5 lg:mt-0 lg:items-start lg:text-left w-full lg:w-3/4 mx-auto">
          <h2 className="text-xl sm:text-3xl font-bold text-gray-900">
            A well-paved surface isn’t just about looks,
            <span className="text-gold"> it’s about longevity</span>. And that’s why choosing the right paving team is important.
          </h2>
          <p className="mt-4 text-sm sm:text-md text-gray-900 leading-relaxed w-full">
            Since 2020, Asphalt Kings has been a trusted leader in asphalt, concrete, grading, and striping.  
            We promise to deliver precision, efficiency, and long-lasting results—while keeping you informed every step of the way.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HomeOpener;
