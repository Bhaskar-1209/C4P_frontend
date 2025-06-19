import React from "react";
import { FaArrowRight } from "react-icons/fa";
import AnimatedBackground from "./AnimatedBackground"; // ✅ import

const services = [
  {
    title: "Healthy Foods",
    desc: "Share stories and experiences from current volunteers to inspire others to join. Allow user to sign up for volunteer opportunities.",
    icon: "🍳",
  },
  {
    title: "Educations",
    desc: "Explore our charity website to discover impactful projects, opportunities, and ways to donate, helping those in need thrive.",
    icon: "🎓",
  },
  {
    title: "Medical Help",
    desc: "Join us in making a difference! Our charity website connects you with volunteer, donation options, and inspiring stories.",
    icon: "💊",
  },
];

const CharityServices = () => {
  return (
    <section className="relative overflow-hidden py-20 px-4 text-center bg-[#ebe6e0]">
      {/* ✅ Include the animated background */}
      <AnimatedBackground />

      <div className="relative z-10 animate-fadeIn">
        <p className="text-[#3a5f50] text-lg font-semibold mb-2 uppercase tracking-wider">
          Charity Services
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#3a5f50] mb-2">
          We Do It For All People
        </h2>
        <h3 className="text-3xl font-semibold text-[#5a7c6c] mb-12">
          Humanist Services
        </h3>

        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-xl p-6 w-full md:w-80 relative hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-slideUp opacity-0`}
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <div className="w-16 h-16 mx-auto -mt-14 rounded-full bg-[#3a5f50] text-white flex items-center justify-center text-3xl shadow-lg">
                {service.icon}
              </div>
              <h4 className="mt-4 font-bold text-xl text-[#3a5f50]">
                {service.title}
              </h4>
              <p className="text-gray-600 mt-2 text-sm">{service.desc}</p>
              <button className="mt-6 bg-[#3a5f50] hover:bg-[#2f4c41] text-white font-medium py-2 px-4 rounded-full inline-flex items-center gap-2 transition duration-300">
                Learn More <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharityServices;
