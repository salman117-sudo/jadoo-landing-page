import React from 'react'

const Booking = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 px-6 sm:px-10 lg:px-15 pt-8 md:pt-10 lg:pt-1 pb-10 md:pb-10 lg:pb-2 max-w-7xl mx-auto overflow-hidden">

      {/* Left content */}
      <div className="flex flex-col gap-5 w-full lg:w-1/2 text-center lg:text-left">

        <span className="text-gray3 font-semibold uppercase tracking-wide text-sm md:text-base">
          Easy and Fast
        </span>

        <h1 className="volkhov text-gray4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Book your next trip in 3 easy steps
        </h1>

        <div className="flex flex-col gap-8 mt-4">
          <div className="flex gap-5 text-left items-start">
            <img src="homePage/booking/Group 7.svg" alt="step 1" className="w-12 h-12 shrink-0" />
            <div>
              <p className="text-gray3 text-base font-bold">Choose Destination</p>
              <p className="text-gray3 text-sm font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
              </p>
            </div>
          </div>

          <div className="flex gap-5 text-left items-start">
            <img src="homePage/booking/Group 12.svg" alt="step 2" className="w-12 h-12 shrink-0" />
            <div>
              <p className="text-gray3 text-base font-bold">Make Payment</p>
              <p className="text-gray3 text-sm font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
              </p>
            </div>
          </div>

          <div className="flex gap-5 text-left items-start">
            <img src="homePage/booking/Group 11.svg" alt="step 3" className="w-12 h-12 shrink-0" />
            <div>
              <p className="text-gray3 text-base font-bold">Reach Airport on Selected Date</p>
              <p className="text-gray3 text-sm font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right image with soft glow */}
      <div className="relative w-full lg:w-1/2 flex items-center justify-center">
        <div className="absolute  h-112 bg-blue-100/60 rounded-full blur-3xl -z-10"></div>

        <img
          src="homePage/booking/Image (1).webp"
          alt="booking"
          className="relative w-full max-w-140 h-auto object-contain"
        />
      </div>

    </div>
  )
}

export default Booking


// import React from 'react'

// const Booking = () => {
//   return (
//     <div className="flex  flex-col lg:flex-row items-stretch justify-between gap-10 lg:gap-16 px-6 sm:px-10 lg:px-20 py-12 lg:py-20 max-w-7xl mx-auto">

//       {/* Left content */}
//       <div className="flex flex-col gap-5 w-full lg:max-w-120 text-center lg:text-left  p-8">

//         <span className="text-gray3 font-semibold uppercase tracking-wide text-sm md:text-base">
//           Easy and Fast
//         </span>

//         <h1 className="volkhov text-gray4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
//           Book your next trip in 3 easy steps
//         </h1>

//         <div className="flex flex-col gap-8 mt-4">
//           <div className="flex gap-5 text-left items-start">
//             <img src="homePage/booking/Group 7.svg" alt="step 1" className="w-12 h-12 shrink-0" />
//             <div>
//               <p className="text-gray3 text-base font-bold">Choose Destination</p>
//               <p className="text-gray3 text-sm font-normal">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
//               </p>
//             </div>
//           </div>

//           <div className="flex gap-5 text-left items-start">
//             <img src="homePage/booking/Group 12.svg" alt="step 2" className="w-12 h-12 shrink-0" />
//             <div>
//               <p className="text-gray3 text-base font-bold">Make Payment</p>
//               <p className="text-gray3 text-sm font-normal">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
//               </p>
//             </div>
//           </div>

//           <div className="flex gap-5 text-left items-start">
//             <img src="homePage/booking/Group 11.svg" alt="step 3" className="w-12 h-12 shrink-0" />
//             <div>
//               <p className="text-gray3 text-base font-bold">Reach Airport on Selected Date</p>
//               <p className="text-gray3 text-sm font-normal">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right image */}
//       <div className="w-full lg:flex-1 flex items-center justify-center">
//         <img
//           src="homePage/booking/Image (1).webp"
//           alt="booking"
//           className="max-w-130 h-auto object-contain"
//         />
//       </div>

//     </div>
//   )
// }

// export default Booking



// import React from 'react'

// const booking = () => {
//   return (
//     <div className=" pl-45  pt-15 flex bg-accent flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-16 px-6 sm:px-10 lg:px-20 py-12 lg:py-20 max-w-7xl mx-auto">

//         <div className="flex  flex-col gap-5 bg-amber-200">
//             <span className="text-gray3 text-[18px] font-semibold uppercase tracking-wide text-sm md:text-lg lg:text-left text-center">
//                 Easy and Fast
//             </span>

//             <h1 className="text-gray4 text-3xl sm:text-4xl md:text-5xl font-bold">
//                 Book your next trip 
//                 in 3 easy steps
//             </h1>

//         {/* 3 steps  */}
//         <div className=" flex flex-col gap-10">
//         <div className="flex gap-5">
//             <div className="">
//             <img src="homePage/booking/Group 7.svg" alt="step 1" />
//             </div>

            
//             <div className="">
//                 <p className="text-gray3 text-[16px] font-bold">Choose Destination</p>
//                 <p className="text-gray3 text-[14px] font-normal">Lorem ipsum dolor sit amet, consectetur 
//                    adipiscing elit. Urna, tortor tempus. </p>
//             </div>
            
//         </div>

//         <div className="flex gap-5">
//             <div className="">
//             <img src="homePage/booking/Group 12.svg" alt="step 1" />
//             </div>

            
//             <div className="">
//                 <p className="text-gray3 text-[16px] font-bold">Make Payment</p>
//                 <p className="text-gray3 text-[14px] font-normal">Lorem ipsum dolor sit amet, consectetur 
//                    adipiscing elit. Urna, tortor tempus. </p>
//             </div>
            
//         </div>

//         <div className="flex gap-5">
//             <div className="">
//             <img src="homePage/booking/Group 11.svg" alt="step 1" />
//             </div>

            
//             <div className="">
//                 <p className="text-gray3 text-[16px] font-bold">Reach Airport on Selected Date</p>
//                 <p className="text-gray3 text-[14px] font-normal">Lorem ipsum dolor sit amet, consectetur 
//                    adipiscing elit. Urna, tortor tempus. </p>
//             </div>
            
//         </div>
//         </div>


//         </div>


//         <div className=" bg-amber-600">
//             <img  src="homePage/booking/Image (1).webp" alt="booking " />
//         </div>

//     </div>
//   )
// }

// export default booking