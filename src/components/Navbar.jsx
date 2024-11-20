import React, { useState } from 'react';
import logo from '../Assets/Images/medchain-logo.png';
import { NavLink } from 'react-router-dom';
import { FaGlobe, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-[70px] shadow-md flex justify-between items-center px-4 md:px-[70px] py-4">
      {/* Logo */}
      <div>
        <NavLink to="/">
          <img src={logo} alt="logo" className="w-[138px] h-[38px]" />
        </NavLink>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-[30px]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-[#161C2D] text-[15px] border-b-2 border-[#6833FB]'
              : 'text-[#161C2D] text-[15px]'
          }
        >
          About
        </NavLink>
        <NavLink
          to="/patient"
          className={({ isActive }) =>
            isActive
              ? 'text-[#161C2D] text-[15px] border-b-2 border-[#6833FB]'
              : 'text-[#161C2D] text-[15px]'
          }
        >
          For Patients
        </NavLink>
        <NavLink
          to="/hospital"
          className={({ isActive }) =>
            isActive
              ? 'text-[#161C2D] text-[15px] border-b-2 border-[#6833FB]'
              : 'text-[#161C2D] text-[15px]'
          }
        >
          For Hospitals
        </NavLink>
        <NavLink
          to="/pricing"
          className={({ isActive }) =>
            isActive
              ? 'text-[#161C2D] text-[15px] border-b-2 border-[#6833FB]'
              : 'text-[#161C2D] text-[15px]'
          }
        >
          Pricing
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? 'text-[#161C2D] text-[15px] border-b-2 border-[#6833FB]'
              : 'text-[#161C2D] text-[15px]'
          }
        >
          Contact
        </NavLink>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden bg-white flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#161C2D] text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sign In/Up and Language Selector for Desktop */}
      <div className="hidden md:flex items-center gap-4">
        <div className="w-[121px] h-[48px] bg-[#6833FB] rounded-[12px] flex justify-center items-center text-white text-[14px] font-[400] cursor-pointer">
          Sign In/Up
        </div>

        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={() => setLanguageOpen(!languageOpen)}
            className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full text-[#161C2D] hover:bg-gray-300"
          >
            <FaGlobe />
          </button>

          {/* Language Dropdown */}
          {languageOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-lg">
              <div className="py-2 px-4 cursor-pointer hover:bg-gray-100">English</div>
              <div className="py-2 px-4 cursor-pointer hover:bg-gray-100">Spanish</div>
              <div className="py-2 px-4 cursor-pointer hover:bg-gray-100">French</div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-10 flex gap-[20px] flex-col items-center pt-20">
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-[#161C2D] text-2xl"
          >
            <FaTimes />
          </button>

          {/* Menu Links */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-[#161C2D] text-[18px] border-b-2 border-[#6833FB]'
                : 'text-[#161C2D] text-[18px]'
            }
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/patient"
            className={({ isActive }) =>
              isActive
                ? 'text-[#161C2D] text-[18px] border-b-2 border-[#6833FB]'
                : 'text-[#161C2D] text-[18px]'
            }
            onClick={() => setMenuOpen(false)}
          >
            For Patients
          </NavLink>
          <NavLink
            to="/hospital"
            className={({ isActive }) =>
              isActive
                ? 'text-[#161C2D] text-[18px] border-b-2 border-[#6833FB]'
                : 'text-[#161C2D] text-[18px]'
            }
            onClick={() => setMenuOpen(false)}
          >
            For Hospitals
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive
                ? 'text-[#161C2D] text-[18px] border-b-2 border-[#6833FB]'
                : 'text-[#161C2D] text-[18px]'
            }
            onClick={() => setMenuOpen(false)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'text-[#161C2D] text-[18px] border-b-2 border-[#6833FB]'
                : 'text-[#161C2D] text-[18px]'
            }
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>

          {/* Sign In/Up button */}
          <div
            className="w-[121px] h-[48px] bg-[#6833FB] rounded-[12px] flex justify-center items-center text-white text-[14px] font-[400] cursor-pointer mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Sign In/Up
          </div>

          {/* Language Selector */}
          <div className="relative mt-4">
            <button
              onClick={() => setLanguageOpen(!languageOpen)}
              className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full text-[#161C2D] hover:bg-gray-300"
            >
              <FaGlobe />
            </button>
            {languageOpen && (
              <div className="absolute mt-2 w-32 bg-white border rounded-md shadow-lg">
                <div className="py-2 px-4 cursor-pointer hover:bg-gray-100">English</div>
                <div className="py-2 px-4 cursor-pointer hover:bg-gray-100">Spanish</div>
                <div className="py-2 px-4 cursor-pointer hover:bg-gray-100">French</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
