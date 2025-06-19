import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import awarenessIcon from "../assets/logos/aware.svg";
import donationIcon from "../assets/logos/price.svg";
import impactIcon from "../assets/logos/impact.svg";
import bgBanner from "../assets/volunteers/1.png"; // Image inside the circle

const processSteps = [
  {
    title: "Awareness & Engagement",
    description:
      "Inform and engage potential donors and supporters using social media, events, and campaigns.",
    icon: awarenessIcon,
  },
  {
    title: "Donation Collection",
    description:
      "Secure and easy donation systems for one-time and recurring support.",
    icon: donationIcon,
  },
  {
    title: "Impact & Accountability",
    description:
      "Transparent fund allocation to meaningful, trackable initiatives.",
    icon: impactIcon,
  },
];

const DonatingProcess = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Donation submitted successfully!");
    setFormData({
      name: "",
      email: "",
      amount: "",
      message: "",
    });
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Banner Section */}
      <div
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgBanner})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <h1
          className="relative z-10 text-white text-4xl md:text-5xl font-bold text-center px-4"
          data-aos="fade-down"
        >
          Join Our Mission to Make a Difference
        </h1>
      </div>

      {/* Donating Work Process Section */}
      <section className="bg-white py-20 px-4 md:px-20 text-center">
        <p className="text-[#f4a825] font-semibold text-sm mb-2" data-aos="fade-up">
          Work Process
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-14" data-aos="fade-up">
          Our Donating Work Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
              data-aos="zoom-in"
            >
              <div className="relative w-48 h-48 [perspective:1000px]">
                <svg viewBox="0 0 512 512" className="w-full h-full rounded-full">
                  <defs>
                    <pattern
                      id={`circlePattern${index}`}
                      patternUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <image
                        href={bgBanner}
                        preserveAspectRatio="xMidYMid slice"
                        width="512"
                        height="512"
                      />
                    </pattern>
                  </defs>
                  <circle
                    cx="256"
                    cy="256"
                    r="256"
                    fill={`url(#circlePattern${index})`}
                  />
                  <circle
                    cx="256"
                    cy="256"
                    r="256"
                    fill="rgba(148, 174, 129, 0.35)" // overlay
                  />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-10 h-10 [transform-style:preserve-3d] transition-transform duration-500 group-hover:rotate-y-180">
                    {/* Front Icon */}
                    <img
                      src={step.icon}
                      alt="icon front"
                      className="absolute w-full h-full backface-hidden"
                    />
                    {/* Back Icon */}
                    <img
                      src={step.icon}
                      alt="icon back"
                      className="absolute w-full h-full rotate-y-180 backface-hidden"
                    />
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6">{step.title}</h3>
              <p className="mt-3 text-gray-600 text-sm px-4">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Donation Form Section */}
    <section className="bg-gray-100 py-20 px-4 md:px-20">
  <div
    className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
    data-aos="fade-up"
  >
    {/* Left Side Content */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Make a Difference with Your Support
      </h2>
      <p className="text-gray-700 mb-4">
        Your donation helps us continue our mission and reach more lives. Every contribution goes directly to the cause, and you can choose to give a one-time or recurring gift.
      </p>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li>100% transparent use of funds</li>
        <li>Secure payment system</li>
        <li>Tax-deductible receipts provided</li>
        <li>Track the impact you create</li>
      </ul>
    </div>

    {/* Right Side Form */}
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Donation submitted!");
      }}
      className="bg-white p-8 rounded-lg shadow-md space-y-6"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-[#f4a825] focus:border-[#f4a825]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-[#f4a825] focus:border-[#f4a825]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Donation Amount (₹)
        </label>
        <input
          type="number"
          min="1"
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-[#f4a825] focus:border-[#f4a825]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Message (Optional)
        </label>
        <textarea
          rows="3"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-[#f4a825] focus:border-[#f4a825]"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-[#f4a825] text-white font-semibold py-3 rounded-md hover:bg-[#e39e1e] transition"
      >
        Donate Now
      </button>
    </form>
  </div>
</section>

    </div>
  );
};

export default DonatingProcess;
