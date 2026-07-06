import React from 'react'
import { Mail } from 'lucide-react'

const Information = () => {
  return (
    <div className="mx-4 sm:mx-8 lg:mx-36 mb-10 sm:mb-16 lg:mb-20 mt-15 ">
      <div className="flex flex-col items-center justify-center gap-8 p-8 sm:p-12 lg:p-16 bg-gray6-20 rounded-tl-[110px] rounded-tr-[50px] sm:rounded-tr-[50px] lg:rounded-tr-[30px] rounded-br-[20px] rounded-bl-[20px] max-w-360 mx-auto">

        <h2 className="text-gray2 text-2xl sm:text-3xl lg:text-4xl font-bold text-center leading-snug max-w-3xl">
          Subscribe to get information, latest news and other interesting offers about Jadoo
        </h2>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full max-w-2xl">

          <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 flex-1">
            <Mail className="w-5 h-5 text-gray3 shrink-0" />
            <input
              type="email"
              placeholder="Your email"
              className="w-full outline-none text-gray4 placeholder:text-gray3 bg-transparent"
            />
          </div>

          <button className="bg-linear-to-r from-primary-start to-primary-end transition-all text-white text-[17px] font-semibold rounded-xl px-8 py-4 whitespace-nowrap">
            Subscribe
          </button>

        </div>

      </div>
    </div>
  )
}

export default Information