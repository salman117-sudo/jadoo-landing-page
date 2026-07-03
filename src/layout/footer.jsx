import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className="max-w-360 mx-auto px-6 sm:px-10 lg:px-20 py-12 sm:py-16 lg:py-20">

        <div className="flex flex-wrap justify-center lg:justify-between gap-x-10 gap-y-10 lg:gap-6 text-center sm:text-left">

          {/* Brand */}
          <div className="flex flex-col gap-3 items-center sm:items-start w-full sm:w-[45%] md:w-[28%] lg:w-auto lg:flex-1 max-w-xs">
            <p className="text-[36px] sm:text-[40px] lg:text-[44px] font-normal text-gray4 leading-none">
              Jadoo.
            </p>
            <p className="text-gray3 text-sm sm:text-base">
              Book your trip in minute, get full control for much longer.
            </p>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3 items-center sm:items-start w-full sm:w-[45%] md:w-[28%] lg:w-auto">
            <p className="text-lg sm:text-xl font-bold text-gray4">Company.</p>
            <a href="#" className="text-gray3 text-sm sm:text-base hover:text-gray4 transition-colors">About</a>
            <a href="#" className="text-gray3 text-sm sm:text-base hover:text-gray4 transition-colors">Careers</a>
            <a href="#" className="text-gray3 text-sm sm:text-base hover:text-gray4 transition-colors">Mobile</a>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3 items-center sm:items-start w-full sm:w-[45%] md:w-[28%] lg:w-auto">
            <p className="text-lg sm:text-xl font-bold text-gray4">Contact.</p>
            <a href="#" className="text-gray3 text-sm sm:text-base hover:text-gray4 transition-colors">Help/FAQ</a>
            <a href="#" className="text-gray3 text-sm sm:text-base hover:text-gray4 transition-colors">Press</a>
            <a href="#" className="text-gray3 text-sm sm:text-base hover:text-gray4 transition-colors">Affiliates</a>
          </div>

          {/* More */}
          <div className="flex flex-col gap-3 items-center sm:items-start w-full sm:w-[45%] md:w-[28%] lg:w-auto">
            <p className="text-lg sm:text-xl font-bold text-gray4">More</p>
            <a href="#" className="text-gray3 text-sm sm:text-base hover:text-gray4 transition-colors">Airline fees</a>
            <a href="#" className="text-gray3 text-sm sm:text-base hover:text-gray4 transition-colors">Airline</a>
            <a href="#" className="text-gray3 text-sm sm:text-base hover:text-gray4 transition-colors">Low fare tips</a>
          </div>

          {/* Social + App download */}
          <div className="flex flex-col gap-3 items-center sm:items-start w-full sm:w-[45%] md:w-[28%] lg:w-auto">
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray5 transition-colors">
                <img src="layout/footer logo/Social (1).svg" alt="Facebook" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                <img src="layout/footer logo/Social (2).svg" alt="Instagram" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray5 transition-colors">
                <img src="layout/footer logo/Social (2).svg" alt="Twitter" />
              </a>
            </div>

            <p className="text-gray3 text-sm sm:text-base mt-1">Discover our app</p>

            <div className="flex flex-col gap-2 items-center sm:items-start">
              <img src="layout/footer logo/Play Store.svg" alt="Get it on Google Play" className="h-9 w-auto" />
              <img src="layout/footer logo/Google Play.svg" alt="Available on the Apple Store" className="h-9 w-auto" />
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <p className="text-center text-gray3 text-sm mt-12 lg:mt-16">
          All rights reserved@jadoo.co
        </p>

      </div>
    </footer>
  )
}

export default Footer