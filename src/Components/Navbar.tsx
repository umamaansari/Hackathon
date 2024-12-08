import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="w-full h-[80px] flex justify-center items-center bg-white">
      <div className="w-[80%] h-full flex justify-between items-center">
        {/* Left Side - Logo and Icon */}
        <div className="flex items-center">
          {/* Icon Image */}
          <div className="mr-2">
            <Image src="/Vector (1).png" alt="Logo Icon" width={16} height={16} />
          </div>
          {/* Logo */}
          <h1 className="text-xl font-bold text-black border-b-2 pb-1">Avion</h1>
        </div>

        {/* Navigation Links and Icons */}
        <div className="flex items-center">
          <ul className="flex gap-x-20">
            <li><Link className="text-black hover:text-gray-700" href="/">Plant pots</Link></li>
            <li><Link className="text-black hover:text-gray-700" href="/">Ceramics</Link></li>
            <li><Link className="text-black hover:text-gray-700" href="/">Tables</Link></li>
            <li><Link className="text-black hover:text-gray-700" href="/">Chairs</Link></li>
          </ul>

          {/* Cart Icon */}
          <div className="mr-4 gap-5">
            <Image src="/shoppingcard.png" alt="Shopping Cart" width={16} height={16} />
          </div>

          {/* User Avatar Icon */}
          <div className='mr-4'>
            <Image src="/imagebox1/useravtar.png" alt="User Avatar" width={16} height={16} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
