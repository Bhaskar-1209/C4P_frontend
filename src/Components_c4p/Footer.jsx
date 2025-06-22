import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import logo_1 from '../assets/logos/1.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0a0f0d] text-white">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div>
              <h2 className="text-2xl font-semibold">Subscribe To Our Newsletter</h2>
              <p className="text-sm text-gray-400 mt-1">Regular inspections and feedback mechanisms</p>
            </div>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="px-4 py-2 rounded-l-full w-72 text-black"
              />
              <button className="bg-[#f57c00] px-4 py-2 rounded-r-full">
                <svg fill="white" width="18" height="18" viewBox="0 0 512 512">
                  <path d="M476.864 3.402c-2.508-1.035-5.25-.77-7.543.74L10.326 310.657c-2.9 1.883-4.41 5.38-3.87 8.793.537 3.412 2.94 6.265 6.248 7.36l120.75 39.773L434.964 77.342 181.11 394.27v.008l-.015.02-.005.005v.002l-.01.01-.002.003c-.448.558-.795 1.21-1.02 1.938l-36.38 118.61c-1.01 3.294-.11 6.872 2.31 9.345 2.422 2.47 5.99 3.42 9.3 2.45l.01-.002c.02-.005.04-.01.06-.016l.007-.003 120.567-41.51c.698-.242 1.35-.61 1.932-1.078l.002-.002.003-.002c.008-.007.017-.015.025-.022l.008-.005.017-.013c.01-.008.02-.015.03-.023.005-.004.01-.007.014-.012l.007-.005c.01-.01.022-.017.033-.027.003-.002.007-.004.01-.006l.01-.01c.01-.007.02-.015.03-.023.004-.002.007-.006.01-.008l.002-.002L511.73 43.23c2.31-2.873 2.935-6.742 1.637-10.197-1.3-3.456-4.166-6.125-7.67-7.63z" />
                </svg>
              </button>
            </div>
          </div> */}

        {/* <hr className="my-10 border-gray-700" /> */}

        {/* Footer Info */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-25 text-sm">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="text-2xl font-bold flex items-center">
              <a href="/" className="flex items-center">
                <img src={logo_1} alt="logo" className="w-120 h-auto mr-2 mb-1" />
                {/* <span className="text-white">Ca</span> */}
              </a>
            </div>
            {/* <p className="text-gray-400 mt-4">
              Our secure online donation platform allows you to make contributions quickly and safely.
              Choose from various.
            </p>
            <button className="mt-4 bg-[#1d4d47] px-4 py-2 rounded-full hover:bg-[#2a6e65] transition">
              ❤️ Donate Now
            </button> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>↗ About Us</li>
              <li>↗ Our News</li>
              <li>↗ Our Campaign</li>
              <li>↗ Privacy Policy</li>
              <li>↗ Contact Us</li>
            </ul>
          </div>

          {/* Our Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Service</h3>
            <ul className="space-y-2 text-gray-300">
              <li>↗ Give Donation</li>
              <li>↗ Education Support</li>
              <li>↗ Food Support</li>
              <li>↗ Health Support</li>
              <li>↗ Our Campaign</li>
              <li><Link to="/login" className="hover:text-green-400">Login</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex items-start gap-4 text-gray-300 mb-4">
              <FaPhoneAlt className="text-[#8ba07c] mt-1" />
              <div>
                <p>Call us any time:</p>
                <a href="tel:+917838295296" className="text-white font-medium">
                  +91 78382 95296
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 text-gray-300">
              <FaEnvelope className="text-[#8ba07c] mt-1" />
              <div>
                <p>Email us any time:</p>
                <a href="mailto:care4poor@gmail.com" className="text-white font-medium">
                  care4poor@gmail.com
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex mt-6 gap-4">
              <a href="#" className="bg-white text-black p-2 rounded-full">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-white text-black p-2 rounded-full">
                <FaTwitter />
              </a>
              <a href="#" className="bg-white text-black p-2 rounded-full">
                <FaYoutube />
              </a>
              <a href="#" className="bg-white text-black p-2 rounded-full">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-[#3a5f50] text-center py-4 text-gray-300 text-sm">
        © Copyright 2025 Care4Poor. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
