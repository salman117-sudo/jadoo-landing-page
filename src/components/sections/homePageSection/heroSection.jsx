import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full bg-white overflow-hidden pt-20">
      <div className="max-w-360 mx-auto px-6 lg:px-20 xl:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 xl:gap-16">
          {/* Left */}
          <div className="w-full lg:w-1/2 flex flex-col gap-9">
            <p className="text-[20px] text-red font-bold uppercase tracking-wide text-sm md:text-lg lg:text-left text-center">
              Best Destinations Around The World
            </p>

            <h1
              className="volkhov  text-gray font-bold leading-[0.95]
           text-[52px]
          sm:text-[60px]
          md:text-[64px]
          lg:text-[68px]
         xl:text-[74px]
2       
        text-center lg:text-left"
            >
              Travel, enjoyy
              <br />
              and live a new
              <br />
              and full life
            </h1>

            <p className="  text-gray2 text-[16px] font-normal leading-8 lg:text-left  text-center">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. A, accusantium..
            </p>

            <div className=" flex flex-wrap items-center justify-center lg:justify-start sm:gap-8 ">
              <button className="bg-yellow text-white px-8 py-4 rounded-xl shadow-lg hover:bg-yellow-700 duration-300 ">
                Find out more
              </button>

              <div className=" flex items-center pt-3  ">
                <img
                  className="pt-3"
                  src="/homePage/heroSection/Play button.svg"
                  alt="play button "
                />
                <span className="text-play pb-5">play Demo</span>
              </div>
            </div>
          </div>

        {/* Right */}
<div className="relative w-full lg:w-1/2 flex justify-center">
  {/* Plane 1 */}
  

  {/* Girl */}
  <img
    src="homePage/heroSection/Image.webp"
    alt="Traveller"
    className="w-full max-w-xl object-contain z-10"
  />

  {/* Plane 2 */}
  
</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
