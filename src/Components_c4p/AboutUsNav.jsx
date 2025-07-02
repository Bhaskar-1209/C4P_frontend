import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import bg_3 from '../assets/banner/bg_3.png';
import ourmission from '../assets/AboutusNav/OurMission.png';
import ourvalues from '../assets/AboutusNav/ourvalues.png';
import ourvission from '../assets/AboutusNav/OurVission.png';
import whatwedo from '../assets/AboutusNav/Whatwedo.png';

const AboutUsNav = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="font-sans text-gray-800">
      <section data-aos="fade-in" className="relative h-[500px] bg-black text-white flex items-center justify-center">
        <img
          src={bg_3}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">About Us</h1>
        </div>
      </section>

      <section data-aos="fade-up" className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-[#94ae81] uppercase mb-6 text-center">
          Hope For Every Child
        </h2>
        <p className="text-sm md:text-base leading-relaxed mb-4 text-gray-700 text-justify">
          Our mission at HopeForEveryChild is to change the lives of impoverished kids by giving them access to wholesome food, high-quality education, and necessary medical treatment. Regardless of their circumstances or origin, we think all children should have an equal opportunity to develop, learn, and flourish.
        </p>
        <p className="text-sm md:text-base leading-relaxed text-gray-700 text-justify">
          We strive at the local level to make sure underprivileged kids get the help they need through nutrition campaigns, health camps, school partnerships, and community engagement initiatives. Our goal is to assist children create a healthier, more promising, and more independent future by fostering their bodies and minds in order to end the cycle of poverty.
        </p>
      </section>

      <section className="flex flex-col md:grid md:grid-cols-2">
        <div data-aos="fade-right" className="relative w-full h-64 md:h-96">
          <img src={ourmission} alt="Our Mission" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#94ae81] opacity-30 mix-blend-multiply"></div>
        </div>
        <div data-aos="fade-left" className="p-6 md:p-10">
          <h2 className="text-2xl font-bold text-[#94ae81] uppercase mb-4">Our Mission</h2>
          <p className="mb-4 text-sm leading-relaxed">
            Our goal at Care4Poor is to improve the lives of those who are less fortunate by attending to their basic needs, which include food, shelter, healthcare, and education. We operate with a strong feeling of duty and compassion to make sure that nobody is left behind because of uncontrollable circumstances.
          </p>
          <p className="mb-4 text-sm leading-relaxed">
            Our goal is to close the gap between those who are most in need of resources and those who possess them. We promote independence, dignity, and optimism by providing communities with resources, instruction, and assistance.
          </p>
        </div>
      </section>

      <section className="flex flex-col-reverse md:grid md:grid-cols-2">
        <div data-aos="fade-right" className="p-6 md:p-10">
          <h2 className="text-2xl font-bold text-[#94ae81] uppercase mb-4">Our Vision</h2>
          <p className="mb-4 text-sm leading-relaxed">
            We envision a world where poverty is eradicated, and every person has the chance to live a dignified and fulfilling life. Care4Poor seeks to be a beacon of hope, providing assistance where it’s needed most and advocating for social change.
          </p>
        </div>
        <div data-aos="fade-left" className="relative w-full h-64 md:h-96">
          <img src={ourvission} alt="Our Vision" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#94ae81] opacity-30 mix-blend-multiply"></div>
        </div>
      </section>

      <section className="flex flex-col md:grid md:grid-cols-2">
        <div data-aos="fade-right" className="relative w-full h-64 md:h-96">
          <img src={ourvalues} alt="Our Values" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#94ae81] opacity-30 mix-blend-multiply"></div>
        </div>
        <div data-aos="fade-left" className="p-6 md:p-10">
          <h2 className="text-2xl text-[#94ae81] font-bold uppercase mb-4">Our Values</h2>
          <ul className="space-y-4 text-[#333] text-base md:text-lg list-inside">
            {["Compassion", "Empowerment", "Integrity", "Commitment to Community", "Transparency"].map((item, idx) => (
              <li
                key={idx}
                className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-3 before:h-3 before:bg-[#94ae81] before:rounded-full"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="flex flex-col-reverse md:grid md:grid-cols-2">
        <div data-aos="fade-right" className="p-6 md:p-10">
          <h2 className="text-2xl font-bold text-[#94ae81] uppercase mb-4">What We Do</h2>
          <p className="mb-4 text-sm leading-relaxed">
            Through various campaigns, including food drives, health awareness programs, and educational support, we aim to provide tangible solutions to the most pressing needs of impoverished communities. We work hand in hand with local partners and volunteers to reach those in need.
          </p>
        </div>
        <div data-aos="fade-left" className="relative w-full h-64 md:h-96">
          <img src={whatwedo} alt="What We Do" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#94ae81] opacity-30 mix-blend-multiply"></div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsNav;
