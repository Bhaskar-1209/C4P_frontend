import React from 'react';
import {
  FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn,
  FaPhoneAlt, FaEnvelope
} from 'react-icons/fa';
import logo_1 from '../assets/logos/1.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0a0f0d] text-white">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img src={logo_1} alt="logo" className="w-28 h-auto mr-2" />
            </Link>
            {/* Uncomment below if needed */}
            {/* <p className="text-gray-400 text-sm">
              Our secure online donation platform allows you to contribute quickly and safely.
            </p> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/aboutus" className="hover:text-green-400">↗ About Us</Link></li>
              <li><Link to="/moreProject" className="hover:text-green-400">↗ Projects</Link></li>
              <li><Link to="/joinUs" className="hover:text-green-400">↗ Join Us</Link></li>
              <li><Link to="/contact" className="hover:text-green-400">↗ Contact Us</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Service</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>↗ Give Donation</li>
              <li>↗ Education Support</li>
              <li>↗ Food Support</li>
              <li>↗ Health Support</li>
              <li>↗ Our Campaign</li>
              <li><Link to="/login" className="hover:text-green-400">↗ Login</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex items-start gap-3 mb-4">
              <FaPhoneAlt className="text-[#8ba07c] mt-1" />
              <div>
                <p className="text-sm text-gray-300">Call us any time:</p>
                <a href="tel:+917838295296" className="font-medium text-white hover:underline">
                  +91 78382 95296
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaEnvelope className="text-[#8ba07c] mt-1" />
              <div>
                <p className="text-sm text-gray-300">Email us any time:</p>
                <a href="mailto:care4poor@gmail.com" className="font-medium text-white hover:underline">
                  care4poor@gmail.com
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex mt-6 gap-4">
              <a href="#" className="bg-white text-black p-2 rounded-full hover:scale-110 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-white text-black p-2 rounded-full hover:scale-110 transition">
                <FaTwitter />
              </a>
              <a href="#" className="bg-white text-black p-2 rounded-full hover:scale-110 transition">
                <FaYoutube />
              </a>
              <a href="#" className="bg-white text-black p-2 rounded-full hover:scale-110 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#3a5f50] text-center py-4 text-gray-300 text-sm">
        © Copyright 2025 Care4Poor. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
