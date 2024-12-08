import React from 'react'

const Benefit = () => {
  return (
    <div className="w-full bg-[#F9F9F9] py-10 flex justify-center">
      <div className="w-[80%] max-w-screen-xl text-center">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-[#2A254B]">
            Join the club and get the benefits
          </h1>
          <p className="text-lg text-gray-700 mt-4">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>
        </div>

        {/* Newsletter Subscription Form */}
        <div className="flex flex-col md:flex-row justify-center items-center">
          <input
            type="email"
            placeholder="Your@email.com"
            className="px-6 py-3 rounded-md border border-[#2A254B] text-lg md:w-[300px] mb-4 md:mb-0"
          />
          <button
            className="bg-[#2A254B] text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-[#F9F9F9] hover:text-[#2A254B] transition-colors"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}

export default Benefit
