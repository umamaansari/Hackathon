import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="w-full bg-white flex justify-center">
      <div className="w-[80%] h-full bg-[#2A254B] flex flex-col md:flex-row justify-center items-center py-1">
        
        {/* Left Content (Text and Button) */}
        <div className="w-full md:w-[50%] flex flex-col justify-center items-center text-center mb-8 md:mb-0">
          <h2 className="text-white text-3xl mb-6">
            The furniture brand for the future, with timeless designs
          </h2>

          {/* Button Section Below Text */}
          <div className="flex justify-center mb-8">
            <button className="font-bold text-white bg-[#F9F9F926] border border-[#2A254B] py-4 px-2 hover:bg-white hover:text-[#2A254B] transition-colors">
              View Collection
            </button>
          </div>

          {/* Text Description */}
          <div className="w-[400px] bg-[#2A254B] flex items-center justify-center mb-5">
            <p className="text-white text-sm font-Satoshi px-2 text-center">
              A new era in eco-friendly furniture with Avelon, the French luxury retail brand
              known for tasteful colors and a beautiful way to display things digitally using modern web technologies.
            </p>
          </div>
        </div>

        {/* Right Content (Image) */}
        <div className="w-full md:w-[50%] flex justify-center items-center">
          <Image src="/topchair.jpg" alt="Furniture" width={520} height={584} />
        </div>
      </div>

      
    </div>
  );
};

export default Hero;
