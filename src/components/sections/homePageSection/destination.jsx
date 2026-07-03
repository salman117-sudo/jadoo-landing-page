
import React from 'react'

const Destination = () => {
  return (
    <section className="w-full bg-white pt-16 md:pt-20 lg:pt-10 pb-8 md:pb-6 lg:pb-1 overflow-hidden">
      <div className="max-w-360 mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center">
          <p className="uppercase text-gray3 font-semibold text-base md:text-lg">
            Top Selling
          </p>

          <h2 className="volkhov mt-3 text-gray4 text-3xl sm:text-4xl md:text-5xl font-bold">
            Top Destinations
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start justify-items-center gap-1 md:gap-1 lg:gap-3 mt-12">
          <img
            src="homePage/destination/Destination.png"
            alt="Rome, Italy"
            className="w-full max-w-sm h-auto object-contain"
          />
          <img
            src="homePage/destination/Destination (1).png"
            alt="London, UK"
            className="w-full max-w-sm h-auto object-contain"
          />
          <img
            src="homePage/destination/Destination (2).png"
            alt="Full Europe"
            className="w-full max-w-sm h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default Destination




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