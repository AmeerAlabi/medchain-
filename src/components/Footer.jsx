import React from 'react';
import footerLogo from '../Assets/Images/footerimg.png';
import { FaDribbble, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-[#523D8D] py-10 px-4 sm:px-10 md:px-16 lg:px-20">
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-20 justify-around lg:py-20">
        {/* Left Section */}
        <div className="flex flex-col gap-6 w-full lg:w-1/3">
          <img src={footerLogo} alt="Footer Logo" className="w-[180px] h-auto" />
          <p className="text-[20px] md:text-xl font-light text-white">
            A transformative approach to managing healthcare records and monitoring diseases, enhancing healthcare delivery in Africa.
          </p>
          <div className="flex items-center gap-5">
            <FaFacebook size={20} className="text-gray-400 cursor-pointer hover:text-white" />
            <FaTwitter size={20} className="text-gray-400 cursor-pointer hover:text-white" />
            <FaDribbble size={20} className="text-gray-400 cursor-pointer hover:text-white" />
            <FaInstagram size={20} className="text-gray-400 cursor-pointer hover:text-white" />
            <FaLinkedin size={20} className="text-gray-400 cursor-pointer hover:text-white" />
            <FaYoutube size={20} className="text-gray-400 cursor-pointer hover:text-white" />
          </div>
        </div>

        {/* Address Section */}
        <div className="flex flex-col gap-4 w-full lg:w-1/3">
          <h1 className="text-2xl md:text-3xl font-semibold text-white">ADDRESS</h1>
          <p className="text-[20px] md:text-xl text-white font-light">
            No 13, Surulere area, Lagos, Lagos State, Nigeria
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-4 w-full lg:w-1/3">
          <h1 className="text-2xl md:text-3xl font-semibold text-white">CONTACT</h1>
          <Link className="text-[20px] md:text-xl text-white font-light">
            info@medchain.com <br />
            +234 801 0000 000
          </Link>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <h2 className="text-[18px] md:text-base font-light text-white text-center mt-8">
        © 2024 Medchain - All rights reserved
      </h2>
    </div>
  );
};

export default Footer;
