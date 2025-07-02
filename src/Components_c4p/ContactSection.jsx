import React, { useEffect } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaQuestionCircle } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img from '../assets/Contact/image.png';

const ContactSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="bg-[#ebe6e0] py-10 px-4">
      <div
        className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row gap-8"
        data-aos="fade-up"
      >
        <div className="flex-1 space-y-6" data-aos="fade-right">
          <div className="flex items-start space-x-4">
            <div className="p-4 bg-[#94ae81] rounded-xl text-white text-2xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Address</h3>
              <p className="text-gray-600">
                15 Maniel Lane, Front Line
                <br />
                Berlin, Germany
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-4 bg-[#94ae81] rounded-xl text-white text-2xl">
              <FaPhoneAlt />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <a href="tel:+917838295296" className="text-gray-600 font-medium">
                +91 78382 95296
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-4 bg-[#94ae81] rounded-xl text-white text-2xl">
              <FaEnvelope />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <a href="mailto:care4poor@gmail.com" className="text-gray-600 font-medium">
                care4poor@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-4 bg-[#94ae81] rounded-xl text-white text-2xl">
              <FaQuestionCircle />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Have Questions?</h3>
              <p className="text-gray-600">
                Discover more by visiting us or joining our community
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1" data-aos="fade-left">
          <img
            title="Map Location"
            src={img}
            alt="Google Map Placeholder"
            className="rounded-xl border-0 w-full"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
