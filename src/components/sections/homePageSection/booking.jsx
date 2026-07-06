import React from 'react'

const Booking = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 px-6 sm:px-10 lg:px-15 pt-8 md:pt-10 lg:pt-1 pb-10 md:pb-10 lg:pb-2 max-w-7xl mx-auto mb-40">

      {/* Left content */}
      <div className="flex flex-col gap-5 w-full lg:w-1/2 items-start text-left order-1">

        <span className="text-gray3 font-semibold tracking-wide text-sm md:text-base">
          Easy and Fast
        </span>

        <h1 className="volkhov text-gray4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight w-full max-w-130">
          Book your next trip in 3 easy steps
        </h1>

        <div className="flex lg:flex-col lg:items-start flex-row flex-wrap items-start gap-8 mt-4">
          <div className="flex gap-5 text-left items-start">
            <img src="homePage/booking/Group 7.svg" alt="step 1" className="w-12 h-12 shrink-0" />
            <div>
              <p className="text-gray3 text-base font-bold">Choose Destination</p>
              <p className="text-gray3 text-sm font-normal w-full max-w-70 sm:max-w-80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
              </p>
            </div>
          </div>

          <div className="flex gap-5 text-left items-start">
            <img src="homePage/booking/Group 12.svg" alt="step 2" className="w-12 h-12 shrink-0" />
            <div>
              <p className="text-gray3 text-base font-bold">Make Payment</p>
              <p className="text-gray3 text-sm font-normal w-full max-w-70 sm:max-w-80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
              </p>
            </div>
          </div>

          <div className="flex gap-5 text-left items-start">
            <img src="homePage/booking/Group 11.svg" alt="step 3" className="w-12 h-12 shrink-0" />
            <div>
              <p className="text-gray3 text-base font-bold">Reach Airport on Selected Date</p>
              <p className="text-gray3 text-sm font-normal w-full max-w-70 sm:max-w-80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Right image with soft glow */}
      <div className="relative w-full max-w-121 lg:w-1/2 lg:mr-40 flex items-center justify-center order-2 mt-8 lg:mt-0">

        {/* Soft blue glow behind the whole card group */}
        <div className="absolute top-[8%] right-[8%] w-[60%] h-[60%] bg-blue-200/70 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-[10%] right-[15%] w-[50%] h-[50%] bg-blue-200/60 rounded-full blur-3xl -z-10"></div>

        <div className="w-full max-w-93 relative bg-white rounded-2xl shadow-lg p-4 mx-auto">
            <div className="flex flex-col gap-2">
                <img src="homePage/booking/Rectangle 17.webp" alt="booking" className="w-full h-auto object-contain rounded-xl" />
               <p className='text-[18px] font-normal'>Trip To Greece</p>
                <div className="flex flex-col gap-4">
                
                <p className='text-gray7 text-[16px] font-normal'>14-29 June &nbsp;|  &nbsp; by Robbin joseph</p>
                <img src="homePage/booking/OPTIONS.svg" alt="rating" className='w-34.75 h-9 object-contain' />
               
                <div className="flex gap-2 items-center">
                   <img src="homePage/booking/building 1.svg" alt="rating" className='w-4 h-4 object-contain' />
                  <p className='text-gray7 text-[16px] font-normal'>24 people going</p>
                </div>
                </div>
            </div>

            {/* small box with its own glow */}
            <div className="absolute right-[-10%] sm:right-[-15%] lg:right-[-30%] bottom-8 sm:bottom-12 lg:bottom-13 w-[65%] sm:w-[60%] max-w-55">

              <div className="relative w-full bg-white rounded-2xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3 shadow-[0px_1.85px_3.15px_0px_rgba(0,0,0,0.0048),0px_8.15px_6.52px_0px_rgba(0,0,0,0.0079)]">

                <div className="shrink-0">
                  <img src="homePage/booking/Mask Group.svg" alt="Trip to Rome" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover" />
                </div>

                <div className="flex flex-col">
                  <p className="text-gray3 text-[10px] sm:text-xs">Ongoing</p>
                  <p className="text-gray4 text-xs sm:text-sm font-bold">Trip to rome</p>

                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-blue text-[10px] sm:text-xs font-semibold">40%</span>
                    <span className="text-gray3 text-[10px] sm:text-xs">completed</span>
                  </div>

                  <div className="w-full h-1.5 bg-gray6 rounded-full mt-1 overflow-hidden">
                    <div className="h-full bg-blue rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>

              </div>
            </div>

        </div>
      </div>
      {/* right end here */}

    </div>
  )
}

export default Booking


// import React from 'react'

// const Booking = () => {
//   return (
//     <div className="relative flex flex-col lg:flex-row items-center justify-center  gap-8 lg:gap-20 px-6 sm:px-10 lg:px-15 pt-8 md:pt-10 lg:pt-1 pb-10 md:pb-10 lg:pb-2 max-w-7xl mx-auto overflow-hidden mb-40">

//       {/* Left content */}
//       <div className="flex flex-col gap-5 w-full lg:w-1/2 text-center lg:text-left">

//         <span className="text-gray3 font-semibold tracking-wide text-sm md:text-base">
//           Easy and Fast
//         </span>

//         <h1 className="volkhov text-gray4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
//           Book your next trip <br /> in 3 easy steps
//         </h1>

//         <div className="flex lg:flex-col lg:items-start flex-row flex-wrap items-center gap-8 mt-4">
//           <div className="flex gap-5 text-left items-start">
//             <img src="homePage/booking/Group 7.svg" alt="step 1" className="w-12 h-12 shrink-0" />
//             <div>
//               <p className="text-gray3 text-base font-bold">Choose Destination</p>
//               <p className="text-gray3 text-sm font-normal w-full max-w-70 sm:max-w-80">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
//               </p>
//             </div>
//           </div>

//           <div className="flex gap-5 text-left items-start">
//             <img src="homePage/booking/Group 12.svg" alt="step 2" className="w-12 h-12 shrink-0" />
//             <div>
//               <p className="text-gray3 text-base font-bold">Make Payment</p>
//               <p className="text-gray3 text-sm font-normal w-full max-w-70 sm:max-w-80">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
//               </p>
//             </div>
//           </div>

//           <div className="flex gap-5 text-left items-start">
//             <img src="homePage/booking/Group 11.svg" alt="step 3" className="w-12 h-12 shrink-0" />
//             <div>
//               <p className="text-gray3 text-base font-bold">Reach Airport on Selected Date</p>
//               <p className="text-gray3 text-sm font-normal w-full max-w-70 sm:max-w-80">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
//               </p>
//             </div>
//           </div>
//         </div>

//       </div>

//    {/* Right image with soft glow */}
// <div className="relative w-121 h-120 mr-40 flex items-center justify-center">

//   <div className="w-93 h-95 mt-18 relative bg-white rounded-2xl shadow-lg p-4">
//       <div className="flex flex-col gap-2">
//           <img src="homePage/booking/Rectangle 17.webp" alt="booking" className="w-full h-full object-contain rounded-xl" />
//          <p className='text-[18px] font-normal'>Trip To Greece</p>
//           <div className="flex flex-col gap-4">
          
//           <p className='text-gray7 text-[16px] font-normal'>14-29 June &nbsp;|  &nbsp; by Robbin joseph</p>
//           <img src="homePage/booking/OPTIONS.svg" alt="rating" className='w-34.75 h-9 object-contain' />
         
//           <div className="flex gap-2 items-center">
//              <img src="homePage/booking/building 1.svg" alt="rating" className='w-4 h-4 object-contain' />
//             <p className='text-gray7 text-[16px] font-normal'>24 people going</p>
//           </div>
//           </div>
//       </div>

//       {/* small box with its own glow */}
//       <div className="absolute left-63 bottom-13">

//         {/* Glow only behind this small card */}
//         <div className="absolute inset-0 m-auto w-60 h-60 bg-blue-200/40 rounded-full blur-2xl -z-10"></div>

//         <div className="relative w-55 bg-white rounded-2xl p-4 flex items-center gap-3 shadow-[0px_1.85px_3.15px_0px_rgba(0,0,0,0.0048),0px_8.15px_6.52px_0px_rgba(0,0,0,0.0079)]">

//           <div className="shrink-0">
//             <img src="homePage/booking/Mask Group.svg" alt="Trip to Rome" className="w-10 h-10 rounded-full object-cover" />
//           </div>

//           <div className="flex flex-col">
//             <p className="text-gray3 text-xs">Ongoing</p>
//             <p className="text-gray4 text-sm font-bold">Trip to rome</p>

//             <div className="flex items-center gap-2 mt-1">
//               <span className="text-blue text-xs font-semibold">40%</span>
//               <span className="text-gray3 text-xs">completed</span>
//             </div>

//             <div className="w-full h-1.5 bg-gray6 rounded-full mt-1 overflow-hidden">
//               <div className="h-full bg-blue rounded-full" style={{ width: '40%' }}></div>
//             </div>
//           </div>

//         </div>
//       </div>

//   </div>
// </div>
//     {/*right end here */}

//     </div>
//   )
// }

// export default Booking




// //  <div className=" w-121 h-120 mr-40">
// //         <div className="w-93 h-95  mt-18 relative">
// //             <div className=" flex flex-col gap-2 ">
// //                 <img src="homePage/booking/Rectangle 17.webp" alt="booking" className="w-full h-full object-contain" />
// //                <p className='text-[18px] font-normal'>Trip To Greece</p>
// //                 <div className=" flex  flex-col gap-4">
                
// //                 <p className='text-gray7 text-[16px] font-normal'>14-29 June &nbsp;|  &nbsp; by Robbin joseph</p>
// //                 <img src="homePage/booking/OPTIONS.svg" alt="rating" className='w-34.75 h-9 object-contain' />
               
// //                 <div className=" flex gap-2 items-center">
// //                    < img src="homePage/booking/building 1.svg" alt="rating" className='w-4 h-4 object-contain' />
// //                   < p className='text-gray7 text-[16px] font-normal'>24 people going</p>
// //                 </div>
// //                 </div>
// //             </div>


// //             {/* small box  */}
// //             <div className="w-55 bg-white rounded-2xl p-4 absolute left-63 bottom-13 flex items-center gap-3 shadow-[0px_1.85px_3.15px_0px_rgba(0,0,0,0.0048),0px_8.15px_6.52px_0px_rgba(0,0,0,0.0079)]">

// //   <div className="shrink-0">
// //     <img src="homePage/booking/Mask Group.svg" alt="Trip to Rome" className="w-10 h-10 rounded-full object-cover" />
// //   </div>

// //   <div className="flex flex-col">
// //     <p className="text-gray3 text-xs">Ongoing</p>
// //     <p className="text-gray4 text-sm font-bold">Trip to rome</p>

// //     <div className="flex items-center gap-2 mt-1">
// //       <span className="text-blue text-xs font-semibold">40%</span>
// //       <span className="text-gray3 text-xs">completed</span>
// //     </div>

// //     <div className="w-full h-1.5 bg-gray6 rounded-full mt-1 overflow-hidden">
// //       <div className="h-full bg-blue rounded-full" style={{ width: '40%' }}></div>
// //     </div>
// //   </div>

// // </div>

// //         </div>
// //     </div>