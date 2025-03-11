import Image from "next/image";
import Button from "./Button";

const HeroSection = ({ 
  bgImage,
  blurDataURL,  
  titlePart1, 
  titlePart2, 
  showBadge = true, 
  showButton = true,
  showRibbon = true,
  buttonText = "Get Estimate",
}) => {
  return (
    <section className="relative flex h-[500px] sm:h-screen items-center justify-center overflow-hidden text-center pt-20 sm:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
            src={bgImage}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority="true"
            quality={70}
            placeholder="blur"
            blurDataURL={blurDataURL}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Wrap Title & Badge in an inline-block container */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="inline-block">
          <h1 className="font-sans font-black">
            <span
              className={`block uppercase tracking-wide text-gold`}
              style={{ fontSize: "clamp(40px, 5vw, 80px)" }}
            >
              {titlePart1}
            </span>
            <span
              className={`block uppercase leading-[1.1] tracking-tight text-sand`}
              style={{ fontSize: "clamp(50px, 8vw, 100px)" }}
            >
              {titlePart2}
            </span>
          </h1>

        {showBadge && (
          <div className="mt-4 mid:w-3/4 mx-auto flex items-center justify-center rounded-xl bg-black px-3 py-1 uppercase tracking-widest">
            {/* Left Lines */}
            <div className="flex-1 flex flex-col items-end space-y-1 min-w-[50px] flex-shrink-0">
              <div className="h-0.5 w-full rounded bg-sand"></div>
              <div className="h-0.5 w-full rounded bg-sand"></div>
            </div>

            {/* Center Text */}
            <span
              className="mx-4 text-sand font-alfarn text-[7px] md:text-[9px] lg:text-[10px] xl:text-[12px]">
              One Project at a Time
            </span>

            {/* Right Lines */}
            <div className="flex-1 flex flex-col items-start space-y-1 min-w-[50px] flex-shrink-0">
              <div className="h-0.5 w-full rounded bg-sand"></div>
              <div className="h-0.5 w-full rounded bg-sand"></div>
            </div>
          </div>
        )}

        </div>

        {showButton && (
          <Button href="/estimate">{buttonText}</Button>
        )}
      </div>

      {/* Ribbon Image */}
      {showRibbon && (     
      <div className="hidden sm:flex sm:absolute sm:right-0 sm:top-0 sm:-mr-24 sm:-mt-28 sm:items-end">
        <Image
          src="/Home_Ribbon.png"
          alt="Ribbon"
          width={1080}
          height={1080}
          priority
          quality={70}
          className="w-96 h-96"
        />
      </div>)
      }
    </section>
  );
};

export default HeroSection;
