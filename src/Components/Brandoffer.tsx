import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";
import { LuSprout } from "react-icons/lu";

const Brandoffer = () => {
  return (
    <div className='flex flex-col items-center py-8'>
      {/* Top Heading */}
      <h3 className='text-center font-sm text-2xl mb-8'>
        What makes our brand different
      </h3>

      {/* Boxes Container */}
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl px-4'>
        {/* Box 1 */}
        <div className='flex flex-col items-center text-center p-6 border rounded-lg shadow-lg'>
          <TbTruckDelivery className='text-4xl mb-4 text-[#2A254B]' />
          <h4 className='font-semibold text-lg'>Next day as standard</h4>
          <p className='text-sm text-gray-600'>
            Order before 3pm and get your order the next day as standard
          </p>
        </div>

        {/* Box 2 */}
        <div className='flex flex-col items-center text-center p-6 border rounded-lg shadow-lg'>
          <FaRegCheckCircle className='text-4xl mb-4 text-[#2A254B]' />
          <h4 className='font-semibold text-lg'>Made by true artisans</h4>
          <p className='text-sm text-gray-600'>
            Handmade crafted goods made with real passion and craftsmanship
          </p>
        </div>

        {/* Box 3 */}
        <div className='flex flex-col items-center text-center p-6 border rounded-lg shadow-lg'>
          <h4 className='font-semibold text-lg'>Unbeatable prices</h4>
          <p className='text-sm text-gray-600'>
            For our materials and quality, you wont find better prices anywhere
          </p>
        </div>

        {/* Box 4 */}
        <div className='flex flex-col items-center text-center p-6 border rounded-lg shadow-lg'>
          <LuSprout className='text-4xl mb-4 text-[#2A254B]' />
          <h4 className='font-semibold text-lg'>Recycled packaging</h4>
          <p className='text-sm text-gray-600'>
            Sustainable packaging materials for a greener planet
          </p>
        </div>
      </div>
    </div>
  )
}

export default Brandoffer;
