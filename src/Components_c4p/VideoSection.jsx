import React from 'react';
// import videoSrc from './assets/video.mp4'; // Your video file path
// import leftBorder from './assets/left-border.png'; // Left grunge border image
// import rightBorder from './assets/right-border.png'; // Right grunge border image

const VideoSection = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        {/* <source src={videoSrc} type="video/mp4" /> */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay (for dark effect like image) */}
      <div className="absolute inset-0 bg-[#002d2d]/70"></div>

      {/* Left Border Image */}
      <img
        // src={leftBorder}
        alt="left border"
        className="absolute top-0 left-0 h-full z-20"
      />

      {/* Right Border Image */}
      <img
        // src={rightBorder}
        alt="right border"
        className="absolute top-0 right-0 h-full z-20"
      />

      {/* Play button UI effect */}
      <div className="absolute top-1/2 left-1/2 z-30 transform -translate-x-1/2 -translate-y-1/2 bg-[#f59e0b] rounded-full p-4">
        <div className="bg-white/20 rounded-full p-4">
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M6 4l12 6-12 6V4z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
