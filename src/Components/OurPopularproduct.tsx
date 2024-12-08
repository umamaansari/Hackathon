import React from 'react'
import Image from 'next/image'

const OurPopularProduct = () => {
  return (
    <main>
      <div className='w-full h-auto flex justify-center items-center mt-10'>
        <div className='w-[90%] max-w-screen-xl'>
          {/* Top side */}
          <div>
            <h2 className='text-2xl font-semibold mt-5 text-left'>
              Our Popular Products
            </h2>
          </div>

          {/* Products - Displayed in a single row */}
          <div className='flex justify-between mt-7 gap-8 flex-nowrap'>
            {/* Product 1 */}
            <div className='w-[300px] bg-white p-4 rounded-lg shadow-md'>
              <div className='w-full h-[300px] bg-gray-100 flex justify-center items-center mb-4'>
                <Image 
                  src="/imagebox3/sofa.jpg" 
                  alt="Sofa" 
                  width={300} 
                  height={300} 
                  objectFit="cover" 
                />
              </div>
              <div className='flex flex-col text-center'>
                <span className='font-medium text-lg'>The Popular Suede Sofa</span>
                <span className='font-semibold text-xl'>£980</span>
              </div>
            </div>

            {/* Product 2 */}
            <div className='w-[300px] bg-white p-4 rounded-lg shadow-md'>
              <div className='w-full h-[300px] bg-gray-100 flex justify-center items-center mb-4'>
                <Image 
                  src="/imagebox2/pods.jpg" 
                  alt="Rustic Vase Set" 
                  width={200} 
                  height={200} 
                  objectFit="cover" 
                />
              </div>
              <div className='flex flex-col text-center'>
                <span className='font-medium text-lg'>Rustic Vase Set</span>
                <span className='font-semibold text-xl'>£155</span>
              </div>
            </div>

            {/* Product 3 */}
            <div className='w-[300px] bg-white p-4 rounded-lg shadow-md'>
              <div className='w-full h-[300px] bg-gray-100 flex justify-center items-center mb-4'>
                <Image 
                  src="/imagebox2/showpeas.jpg" 
                  alt="The Silky Vase" 
                  width={200} 
                  height={200} 
                  objectFit="cover" 
                />
              </div>
              <div className='flex flex-col text-center'>
                <span className='font-medium text-lg'>The Silky Vase</span>
                <span className='font-semibold text-xl'>£125</span>
              </div>
            </div>
          </div>

          {/* View All Products Button */}
          <div className='flex justify-center mt-12'>
            <button className='py-2 px-6 bg-[#F9F9F9] rounded-md text-[#2A254B] font-bold transition-all duration-300 hover:bg-[#2A254B] hover:text-white'>
              View All Products
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default OurPopularProduct;
