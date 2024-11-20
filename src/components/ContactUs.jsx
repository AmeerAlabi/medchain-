import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-20 lg:px-32">
      <h2 className="text-4xl font-bold text-center text-[#6833FB] mb-8">
        Get in Touch
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Have questions, suggestions, or need assistance? We'd love to hear from you.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form className="bg-[#6833FB] text-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-lg font-medium mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-md text-gray-800"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-lg font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-md text-gray-800"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-lg font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 rounded-md text-gray-800"
              placeholder="Write your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-white text-[#6833FB] font-medium py-3 rounded-md hover:bg-gray-100 transition"
          >
            Submit
          </button>
        </form>

        {/* Contact Information */}
        <div className="flex flex-col justify-center bg-gray-50 rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-[#6833FB] mb-6">
            Contact Information
          </h3>
          <p className="text-gray-600 mb-4">
            <strong>Email:</strong> support@mdchain.com
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Phone:</strong> +1 234 567 890
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Address:</strong> 123 medchain  Street, 
          </p>
          <div className="mt-6">
            <p className="text-gray-600">
              Follow us on social media to stay updated:
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-[#6833FB] hover:text-[#4d26c8] transition"
              >
            <FaFacebook />
              </a>
              <a
                href="#"
                className="text-[#6833FB] hover:text-[#4d26c8] transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-[#6833FB] hover:text-[#4d26c8] transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
