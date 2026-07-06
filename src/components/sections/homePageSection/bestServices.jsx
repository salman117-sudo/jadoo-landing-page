import React, { useState } from "react";

const BestServices = () => {
  const services = [
    {
      img: "/homePage/bestService/Group 48.svg",
      title: "Calculated Weather",
      desc: "Built Wicket longer admire do barton vanity itself do in it.",
    },
    {
      img: "/homePage/bestService/Group 51.svg",
      title: "Best Flights",
      desc: "Engrossed listening. Park gate sell they west hard for the.",
    },
    {
      img: "/homePage/bestService/Group 50.svg",
      title: "Local Events",
      desc: "Barton vanity itself do in it. Preferred to men it engrossed listening.",
    },
    {
      img: "/homePage/bestService/Group 49.svg",
      title: "Customization",
      desc: "We deliver outsourced aviation services for military customers.",
    },
  ];

  // default active card = index 1 (Best Flights)
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="w-full py-24">
      <div className="max-w-312 mx-auto px-4 md:px-2 flex flex-col gap-15">

        {/* Heading */}
        <div className="text-center">
          <p className="uppercase text-gray3 font-semibold text-lg">
            Category
          </p>
          <h2 className="volkhov text-gray4 text-4xl md:text-5xl font-bold mt-3">
            We Offer Best Services
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">

          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(1)}
              className={`w-full max-w-70 min-h-80 rounded-[36px] px-8 py-10 text-center flex flex-col items-center transition-all duration-300 ${
                activeIndex === index
                  ? "bg-white shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
                  : ""
              }`}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-20 h-20 object-contain"
              />
              <h3 className="mt-8 text-[22px] font-semibold text-gray5 font-open-sans">
                {service.title}
              </h3>
              <p className="mt-5 text-[16px] leading-9 text-gray3">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default BestServices;




// const BestServices = () => {
//   return (
//     <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
//       <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

//         {/* Heading */}
//         <div className="text-center">
//           <p className="uppercase text-gray3 font-semibold text-base md:text-lg">
//             Category
//           </p>

//           <h2 className="volkhov mt-3 text-gray4 text-3xl sm:text-4xl md:text-5xl font-bold">
//             We Offer Best Services
//           </h2>
//         </div>

//         {/* Cards */}
//         <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center">

//           {/* Card 1 */}
//           <div className="w-full max-w-[260px] rounded-3xl px-6 py-8 flex flex-col items-center text-center transition duration-300 hover:shadow-xl">
//             <img
//               src="/homePage/bestService/Group 48.svg"
//               alt="Weather"
//               className="w-16 h-16 md:w-20 md:h-20 object-contain"
//             />

//             <h3 className="open-sans mt-6 text-xl font-semibold text-gray5">
//               Calculated Weather
//             </h3>

//             <p className="mt-4 text-gray3 leading-8">
//               Built Wicket longer admire do barton vanity itself do in it.
//             </p>
//           </div>

//           {/* Active Card */}
//           <div className="w-full max-w-[260px] bg-white rounded-3xl shadow-2xl px-6 py-8 flex flex-col items-center text-center transition duration-300 hover:shadow-2xl">
//             <img
//               src="/homePage/bestService/Group 51.svg"
//               alt="Flights"
//               className="w-16 h-16 md:w-20 md:h-20 object-contain"
//             />

//             <h3 className="open-sans mt-6 text-xl font-semibold text-gray5">
//               Best Flights
//             </h3>

//             <p className="mt-4 text-gray3 leading-8">
//               Engrossed listening. Park gate sell they west hard for the.
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div className="w-full max-w-[260px] rounded-3xl px-6 py-8 flex flex-col items-center text-center transition duration-300 hover:shadow-xl">
//             <img
//               src="/homePage/bestService/Group 50.svg"
//               alt="Events"
//               className="w-16 h-16 md:w-20 md:h-20 object-contain"
//             />

//             <h3 className="open-sans mt-6 text-xl font-semibold text-gray5">
//               Local Events
//             </h3>

//             <p className="mt-4 text-gray3 leading-8">
//               Barton vanity itself do in it. Preferred to men it engrossed listening.
//             </p>
//           </div>

//           {/* Card 4 */}
//           <div className="w-full max-w-[260px] rounded-3xl px-6 py-8 flex flex-col items-center text-center transition duration-300 hover:shadow-xl">
//             <img
//               src="/homePage/bestService/Group 49.svg"
//               alt="Customization"
//               className="w-16 h-16 md:w-20 md:h-20 object-contain"
//             />

//             <h3 className="open-sans mt-6 text-xl font-semibold text-gray5">
//               Customization
//             </h3>

//             <p className="mt-4 text-gray3 leading-8">
//               We deliver outsourced aviation services for military customers.
//             </p>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default BestServices; 
 
 
 // const BestServices = () => {
  //   return (
  //     <section className="w-full bg-white py-20">
  //       <div className="max-w-360 mx-auto px-6">

  //         {/* Heading */}
  //         <div className="text-center">
  //           <p className="uppercase text-gray3 font-semibold text-[18px]">
  //             Category
  //           </p>

  //           <h2 className="volkhov text-gray4 text-5xl md:text-5xl font-bold mt-3">
  //             We Offer Best Services
  //           </h2>
  //         </div>

  //         {/* Cards */}
  //        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center">

  //           {/* Card 1 */}
  //           <div className="flex flex-col items-center text-center px-6 py-8 rounded-3xl">
  //             <img
  //               src="/homePage/bestService/Group 48.svg"
  //               alt=""
  //               className="w-20 h-20 object-contain"
  //             />

  //             <h3 className="mt-6 text-xl font-semibold text-gray5">
  //               Calculated Weather
  //             </h3>

  //             <p className=" text-gray3 leading-8">
  //               Built Wicket longer admire do barton vanity itself do in it.
  //             </p>
  //           </div>

  //           {/* Card 2 (Active) */}
  //           <div className="bg-white rounded-3xl shadow-2xl px-6 py-8 flex flex-col items-center text-center">
  //             <img
  //               src="/homePage/bestService/Group 51.svg"
  //               alt=""
  //               className="w-20 h-20 object-contain"
  //             />

  //             <h3 className=" open-sans mt-6 text-xl font-semibold text-gray5">
  //               Best Flights
  //             </h3>

  //             <p className=" text-gray3 leading-8">
  //               Engrossed listening. Park gate sell they west hard for the.
  //             </p>
  //           </div>

  //           {/* Card 3 */}
  //           <div className="flex flex-col items-center text-center px-6 py-8 rounded-3xl">
  //             <img
  //               src="/homePage/bestService/Group 50.svg"
  //               alt=""
  //               className="w-20 h-20 object-contain"
  //             />

  //             <h3 className=" open-sans mt-6 text-xl font-semibold text-gray5">
  //               Local Events
  //             </h3>

  //             <p className=" text-gray3 leading-8">
  //               Barton vanity itself do in it. Preferd to men it engrossed listening.
  //             </p>
  //           </div>

  //           {/* Card 4 */}
  //           <div className="flex flex-col items-center text-center px-6 py-8 rounded-3xl">
  //             <img
  //               src="/homePage/bestService/Group 49.svg"
  //               alt=""
  //               className="w-20 h-20 object-contain"
  //             />

  //             <h3 className=" open-sans mt-6 text-xl font-semibold text-gray5 ">
  //               Customization
  //             </h3>

  //             <p className=" text-gray3 leading-8">
  //               We deliver outsourced aviation services for military customers.
  //             </p>
  //           </div>

  //         </div>
  //       </div>
  //     </section>
  //   );
  // };

  // export default BestServices;


