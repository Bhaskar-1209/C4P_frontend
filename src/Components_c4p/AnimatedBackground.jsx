import React from "react";
import "./AnimatedBackground.css"; // ✅ import CSS

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 opacity-70 animated-gradient" />

      {/* Floating Blobs */}
      <div className="absolute w-96 h-96 bg-[#3a5f50] opacity-20 blur-3xl rounded-full top-20 left-10 animated-float-slow" />
      <div className="absolute w-80 h-80 bg-[#ebe6e0] opacity-30 blur-2xl rounded-full bottom-10 right-10 animated-float-slower" />

      {/* Dots Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dots"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill="#3a5f50" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
  );
};

export default AnimatedBackground;
