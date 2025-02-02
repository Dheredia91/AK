const ServicesHeading = ({
  showSubHeading = true,
  ServiceHeading1,
  ServiceHeading2,
  ServiceClass1 = "",
}) => {
  return (
    <section className="flex flex-col items-center text-center font-alfarn px-4 mb-4">

      <div className="w-full max-w-xl flex flex-col items-center uppercase mb-4">
        {/* First Heading */}
        <div
          className={`${ServiceClass1} rounded-xl bg-black px-12 text-3xl font-sans font-black text-gold lg:text-6xl tracking-tight`}
        >
          {ServiceHeading1}
        </div>

        {/* Second Heading */}
        <div className="text-5xl font-sans font-black text-black md:text-8xl xl:text-9xl tracking-tighter mx-auto xl:whitespace-nowrap">
          {ServiceHeading2}
        </div>
      </div>

      {/* Subheading */}
      {showSubHeading && (
        <div className="mt-4 text-sm sm:text-md text-gray-900 leading-relaxed max-w-2xl mb-4">
          <p>
            No matter the scale of your project, we’re committed to getting the job done right.
          </p>
          <p className="mt-2">
            Serving Northern California, including San Joaquin, Stanislaus, Sacramento, and Alameda Counties.
            <br />
            Stockton, CA | Sacramento, CA | San Francisco Bay Area.
          </p>
        </div>
      )}
    </section>
  );
};

export default ServicesHeading;
