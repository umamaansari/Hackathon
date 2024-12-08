import React from 'react';
import { CiLinkedin, CiTwitter } from 'react-icons/ci';
import { FaFacebookF, FaInstagramSquare } from 'react-icons/fa';
import { AiOutlineSkype } from 'react-icons/ai';
import { IoLogoPinterest } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="bg-[#2A254B] text-white py-6">
      <div className="w-[90%] max-w-screen-xl mx-auto">
        {/* Footer Menu, Categories, and Newsletter */}
        <div className="flex flex-wrap justify-between gap-8">

          {/* Footer Menu */}
          <div className="flex flex-col w-full sm:w-[150px] lg:w-[200px]">
            <h3 className="font-semibold text-lg mb-4">Menu</h3>
            <ul className="space-y-3">
              <li className="hover:text-[#F9F9F9] cursor-pointer">New arrivals</li>
              <li className="hover:text-[#F9F9F9] cursor-pointer">Best sellers</li>
              <li className="hover:text-[#F9F9F9] cursor-pointer">Recently viewed</li>
              <li className="hover:text-[#F9F9F9] cursor-pointer">Popular this week</li>
              <li className="hover:text-[#F9F9F9] cursor-pointer">All products</li>
            </ul>
          </div>

          {/* Categories */}
          <div className="flex flex-col w-full sm:w-[150px] lg:w-[200px]">
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-3">
              <li className="hover:text-[#F9F9F9] cursor-pointer">Furniture</li>
              <li className="hover:text-[#F9F9F9] cursor-pointer">Decor</li>
              <li className="hover:text-[#F9F9F9] cursor-pointer">Lighting</li>
              <li className="hover:text-[#F9F9F9] cursor-pointer">Accessories</li>
            </ul>
          </div>

          {/* Our Company */}
          <div className="flex flex-col w-full sm:w-[150px] lg:w-[200px]">
            <h3 className="font-semibold text-lg mb-4">Our Company</h3>
            <ul className="space-y-3">
              <li className="hover:text-[#F9F9F9] cursor-pointer">About Us</li>
              <li className="hover:text-[#F9F9F9] cursor-pointer">Careers</li>
              <li className="hover:text-[#F9F9F9] cursor-pointer">Contact</li>
              <li className="hover:text-[#F9F9F9] cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col w-full sm:w-[250px] lg:w-[300px] justify-center items-center mt-5 md:mt-0">
            <h3 className="text-lg font-semibold mb-4">Join our mailing list</h3>
            <input
              type="email"
              placeholder="Your@email.com"
              className="px-6 py-3 rounded-md border border-[#2A254B] text-lg mb-4 lg:mb-0 w-full sm:w-[280px] md:w-[350px] lg:w-[400px]"
            />
            <button className="bg-[#2A254B] text-white px-2 py-2 rounded-md font-bold text-sm hover:bg-[#2A254B] hover:text-[#2A254B] transition-colors w-full">
              Sign Up
            </button>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-6">
          <div className="hover:text-[#F9F9F9] cursor-pointer">
            <CiLinkedin size={20} />
          </div>
          <div className="hover:text-[#F9F9F9] cursor-pointer">
            <FaFacebookF size={20} />
          </div>
          <div className="hover:text-[#F9F9F9] cursor-pointer">
            <FaInstagramSquare size={20} />
          </div>
          <div className="hover:text-[#F9F9F9] cursor-pointer">
            <AiOutlineSkype size={20} />
          </div>
          <div className="hover:text-[#F9F9F9] cursor-pointer">
            <CiTwitter size={20} />
          </div>
          <div className="hover:text-[#F9F9F9] cursor-pointer">
            <IoLogoPinterest size={20} />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-center">
          <p className="text-sm">
            Copyright 2022 Avion LTD
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
