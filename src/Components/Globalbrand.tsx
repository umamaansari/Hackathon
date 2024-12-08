import React from 'react'
import Image from 'next/image'

const GlobalBrand = () => {
  return (
    <div className="w-full bg-white text-black py-2 px-5">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Content (Text Section) */}
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4">
            From a studio in London to a global brand with over 400 outlets
          </h3>
          <p className="text-sm text-gray-700 mb-6">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market.
            Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so our Chelsea boutique became
            the hotbed for the London interior design community.
          </p>
          <div className="flex justify-center items-center mb-8 mt-[100px] mr-96">
            <button className="bg-[#F9F9F9] text-[#2A254B] py-4 px-2 rounded-md hover:bg-[#2A254B] hover:text-[#F9F9F9] transition-colors">
              Get in touch
            </button>
          </div>
        </div>

        {/* Right Content (Image Section) */}
        <div className="mt-5 md:mt-0 md:w-1/2 flex justify-center">
          <Image
            src="/imagebox3/beautifulview.jpg"
            alt="Beautiful View"
            layout="responsive"
            width={720}
            height={603}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default GlobalBrand
