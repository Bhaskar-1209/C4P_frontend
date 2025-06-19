// src/components/ContactHero.jsx
import React from "react";
import contactBg from "../assets/banner/bg_1.png"; // Update path as needed
import ContactSection from "./ContactSection";
import ContactForm from "./ContactFrom";

const ContactHero = () => {
  return (
    <>
    <div
      className="relative w-full h-[60vh] flex items-center justify-center bg-center bg-cover"
      style={{
        backgroundImage: `url(${contactBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-2">Contact us</h1>
        <div className="text-sm">
          {/* <span className="text-yellow-400 font-medium">Home</span>
          <span className="mx-1">→</span>
          <span>Contact us</span> */}
        </div>
      </div>
    </div>
    <ContactSection />
    <ContactForm />
    </>
  );
};

export default ContactHero;
