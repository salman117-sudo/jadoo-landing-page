const Destination = () => {
  const destinations = [
    {
      image: "homePage/destination/Rectangle2.webp",
      alt: "Rome, Italy",
      location: "Rome, Italy",
      price: "$5,42k",
      days: "10 Days Trip",
    },
    {
      image: "homePage/destination/Rectangle1.webp",
      alt: "London, UK",
      location: "London, UK",
      price: "$4.2k",
      days: "12 Days Trip",
    },
    {
      image: "homePage/destination/Rectangle3.webp",
      alt: "Full Europe",
      location: "Full Europe",
      price: "$15k",
      days: "28 Days Trip",
    },
  ];

  return (
    <section className="w-full bg-white pt-16 md:pt-20 lg:pt-24 pb-16 md:pb-20 lg:pb-10 overflow-hidden">
      <div className="max-w-360 mx-auto px-5 sm:px-6 lg:px-8 mb-30">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="uppercase text-gray3 font-semibold text-base md:text-lg">
            Top Selling
          </p>

          <h2 className="volkhov mt-3 text-gray4 text-3xl sm:text-4xl md:text-5xl font-bold">
            Top Destinations
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
          {destinations.map((dest) => (
            <div
              key={dest.location}
              className="relative w-[320px] cursor-pointer transition-all duration-300 hover:-translate-y-2 "
            >
              {/* Card Image */}
              <img
                src={dest.image}
                alt={dest.alt}
                className="w-full h-auto block"
              />

              {/* Overlay Content */}
              <div className="absolute bottom-10 left-0 right-0 px-8">

                {/* Location & Price */}
                <div className="flex items-center justify-between">
                  <h3 className="text-gray4 text-lg font-medium pl-6">
                    {dest.location}
                  </h3>

                  <span className="text-gray4 text-lg font-medium pr-9">
                    {dest.price}
                  </span>
                </div>

                {/* Days */}
                <div className="flex items-center gap-2 mt-4 pl-6">
                  <svg
                    className="w-4 h-4 text-gray4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>

                  <p className="text-gray3 text-sm ">
                    {dest.days}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Destination;



// export default function DestinationSection() {
//     return (
//         <div className="max-w-[1440px] min-w-[300px] mx-auto flex items-center flex-col overflow-hidden gap-8 md:gap-16 lg:gap-20 px-4 sm:px-6 md:px-12 py-14 md:py-16 lg:py-20">

//             <div className="w-full flex flex-col items-center gap-3 md:gap-4">
//                 <p className="poppins text-xs md:text-sm text-text font-bold tracking-widest uppercase">Top Selling</p>
//                 <h1 className="volkhov font-bold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-center text-sub-heading">
//                     Top Destinations
//                 </h1>
//             </div>

//             <div className="w-full flex flex-col sm:flex-row  justify-start gap-4">

//                 {/* Card 1  */}
//                 <div className="w-full sm:w-[280px] md:w-[300px] lg:w-[350px] relative">
//                     <div className="w-[450px] lg:w-[500px] relative h-[220px] sm:h-[240px] md:h-[300px] lg:h-[500px] rounded-[20px">
//                         <img
//                             src="/homePage/destinationSection/Italy.webp"
//                             alt="Rome, Italy"
//                             className=" object-fit"
//                         />
//                     </div>
//                     <div className="w-[300px] lg:w-[320px] bg-white absolute -bottom-18  lg:bottom-10 left-19 rounded-b-[20px] px-4 sm:px-5 md:px-6 py-4 sm:py-5 md:py-6 shadow-lg flex flex-col gap-3 ">
//                         <div className="flex items-center justify-between">
//                             <h5 className="poppins text-base sm:text-lg font-normal text-text">Rome, Italy</h5>
//                             <span className="poppins text-base sm:text-lg font-normal text-text">$5,42k</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <img src="/homePage/destinationSection/pin.svg" alt="location pin" className="w-5 h-5" />
//                             <p className="poppins text-sm sm:text-base text-text font-normal">10 Days Trip</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Card 2  */}
//                 <div className="w-full sm:w-[280px] md:w-[300px] lg:w-[350px] relative">
//                     <div className="w-[500px] relative h-[220px] sm:h-[240px] md:h-[280px] lg:h-[500px] rounded-[20px">
//                         <img
//                             src="/homePage/destinationSection/london.webp"
//                             alt="london"
//                             className=" object-fit"
//                         />
//                     </div>
//                     <div className="w-[320px] bg-white absolute bottom-10 left-19 rounded-b-[20px] px-4 sm:px-5 md:px-6 py-4 sm:py-5 md:py-6 shadow-lg flex flex-col gap-3 ">
//                         <div className="flex items-center justify-between">
//                             <h5 className="poppins text-base sm:text-lg font-normal text-text">London, UK</h5>
//                             <span className="poppins text-base sm:text-lg font-normal text-text">$4.2k</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <img src="/homePage/destinationSection/pin.svg" alt="location pin" className="w-5 h-5" />
//                             <p className="poppins text-sm sm:text-base text-text font-normal">12 Days Trip</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Card 3  */}
//                 <div className="w-full sm:w-[280px] md:w-[300px] lg:w-[350px] relative">
//                     <div className="w-[500px] relative h-[220px] sm:h-[240px] md:h-[280px] lg:h-[500px] rounded-[20px">
//                         <img
//                             src="/homePage/destinationSection/europe.webp"
//                             alt="europe"
//                             className=" object-fit"
//                         />
//                     </div>
//                     <div className="w-[320px] bg-white absolute bottom-10 left-19 rounded-b-[20px] px-4 sm:px-5 md:px-6 py-4 sm:py-5 md:py-6 shadow-lg flex flex-col gap-3 ">
//                         <div className="flex items-center justify-between">
//                             <h5 className="poppins text-base sm:text-lg font-normal text-text">Full Europe</h5>
//                             <span className="poppins text-base sm:text-lg font-normal text-text">$15k</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <img src="/homePage/destinationSection/pin.svg" alt="location pin" className="w-5 h-5" />
//                             <p className="poppins text-sm sm:text-base text-text font-normal">28 Days Trip</p>
//                         </div>
//                     </div>
//                 </div>

//             </div>

//         </div>
//     );
// }


// {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-15">
//         {destinations.map((item, index) => (
//           <div
//             key={index}
//             className="relative w-90 cursor-pointer transition-all duration-300 hover:-translate-y-2"
//           >
//             {/* The base graphic (Contains the picture, white base, and shadow already) */}
//             <img
//               src={item.image}
//               alt={item.title}
//               className="w-full h-110 block"
//             />

//             {/* Content Box overlaid perfectly over the built-in white bottom area */}
//             <div className="absolute bottom-12 left-0 right-0 px-9">
//               {/* Title & Price */}
//               <div className="flex justify-between items-center text-text font-medium text-[18px]">
//                 <h3 className="text-text ml-9">{item.title}</h3>
//                 <span className="mr-9">{item.price}</span>
//               </div>

//               {/* Days */}
//               <div className="flex items-center gap-3 mt-4 text-text font-medium text-sm">
//                 <img
//                   src="/homePage/destination/navigation.svg"
//                   alt="Navigation icon"
//                   className="w-4 h-4 ml-9"
//                 />
//                 <p className="-ml-1">{item.days}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div> */}



// import React from 'react'

// const Destination = () => {
//   return (
//     <section className="w-full bg-white pt-16 md:pt-10 lg:pt-10 pb-8 md:pb-6 lg:pb-1 overflow-hidden">
//       <div className="max-w-360 w-270 h-154 bg-accent mx-auto px-5 sm:px-6 lg:px-8 flex flex-col gap-15">

//         {/* Heading */}
//         <div className="text-center">
//           <p className="uppercase text-gray3 font-semibold text-base md:text-lg">
//             Top Selling
//           </p>

//           <h2 className="volkhov mt-3 text-gray4 text-3xl sm:text-4xl md:text-5xl font-bold">
//             Top Destinations
//           </h2>
//         </div>




//         {/* Cards */}
//         <div className=" flex  gap-10">

//         <div className=" bg-amber-300">
//           <div className="">
//             <img src="homePage/destination/Rectangle2.webp" alt="ilaly" />
           
//           </div>
          
//         </div>



//           {/* <div className="w-78 h-110 bg-amber-300">
//             <div className="">
//               <img src="homePage/destination/Rectangle1.webp" alt="ilaly" />
//             </div>
//           </div>
//           <div className="w-78 h-110 bg-amber-300">
//             <div className="">
//               <img src="homePage/destination/Rectangle3.webp" alt="ilaly" />
//             </div>
//           </div> */}

//         </div>

//       </div>
//     </section>
//   )
// }

// export default Destination




// import React from 'react'

// const Destination = () => {
//   const destinations = [
//     {
//       img: "/homePage/destination/Rectangle2.webp",
//       city: "Rome, Italty",
//       price: "$5,42k",
//       trip: "10 Days Trip",
//     },
//     {
//       img: "/homePage/destination/Rectangle1.webp",
//       city: "London, UK",
//       price: "$4.2k",
//       trip: "12 Days Trip",
//     },
//     {
//       img: "/homePage/destination/Rectangle3.webp",
//       city: "Full Europe",
//       price: "$15k",
//       trip: "28 Days Trip",
//     },
//   ];

//   return (
//     <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
//       <div className="max-w-360 mx-auto px-5 sm:px-6 lg:px-8  ">

//         {/* Heading */}
//         <div className="text-center">
//           <p className="uppercase text-gray3 font-semibold text-base md:text-lg">
//             Top Selling
//           </p>

//           <h2 className="volkhov mt-3 text-gray4 text-3xl sm:text-4xl md:text-5xl font-bold">
//             Top Destinations
//           </h2>
//         </div>

//         {/* Cards */}
//         <div className="mt-13 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">

//           {destinations.map((dest, index) => (
//             <div
//               key={index}
//               className="  rounded-2xl flex flex-col gap-3 overflow-hidden  hover:shadow-2xl transition duration-100 bg-white p-0 m-0"
//             >
//               {/* Image block - fills full width and height of container, cropped edge to edge */}
//               <img
//                 src={dest.img}
//                 alt={dest.city}
//                 className="block w-full h-75 object-cover object-top m-0 p-0"
//               />

//               {/* Info */}
//               <div className="px-6 py-4 flex flex-col gap-2">
//                 <div className="flex flex-nowrap items-center justify-between gap-2">
//                   <h3 className="open-sans text-lg font-semibold text-gray3 truncate pl-9">
//                     {dest.city}
//                   </h3>
//                   <span className="open-sans text-lg font-normal text-gray3 pr-9">
//                     {dest.price}
//                   </span>
//                 </div>

//                 <div className=" flex items-center  text-gray3 pl-5">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-4 h-4"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                   >
//                     <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
//                   </svg>
//                   <span className="text-sm pl-3">{dest.trip}</span>
//                 </div>
//               </div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   )
// }

// export default Destination