// App.jsx
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import bgImage from '../assets/background/aboutus.png'

const services = [
  { color: '#3a5f50', text: 'Charity For Foods' },
  { color: '#3a5f50', text: 'Charity For Water' },
  { color: '#3a5f50', text: 'Charity For Education' },
  { color: '#3a5f50', text: 'Charity For Medical' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#ebe6e0] flex items-center justify-center px-4 py-10">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Image Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="rounded-[30px] overflow-hidden relative z-10">
            <img
              src={bgImage}
              alt="Happy Child"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute inset-0 rounded-[30px] border-[8px] border-[#3a5f50] z-0"></div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <p className="text-[#3a5f50] text-2xl font-semibold mb-2">About Us</p>
          <h1 className="text-5xl md:text-6xl font-bold text-[#3a5f50] leading-tight mb-6">
            We Believe That We<br />Can Save More Life's<br />With You
          </h1>
          <p className="text-gray-600 mb-6 text-xl">
            Donet is the largest global crowdfunding community connecting nonprofits, donors,
            and companies in nearly every country. We help nonprofits from Afghanistan to
            Zimbabwe (and hundreds of places in between) access the tools, training, and support
            they need to be more effective and make our world a better place.
          </p>

          <div className="space-y-3 mb-6 text-xl">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-2">
                <FaCheckCircle className={`text-[${service.color}]`} />
                <span className="text-[#3a5f50] font-medium">{service.text}</span>
              </div>
            ))}
          </div>

          <button className="bg-[#3a5f50] hover:bg-[#2e4e40] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all">
            About More <FaArrowRight />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
