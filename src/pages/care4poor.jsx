// HomePage.jsx
import React from 'react';
import HomeSection from '../Components_c4p/HomeSection';
import CharityServices from '../Components_c4p/CharityServices';
import VideoSection from '../Components_c4p/VideoSection';
import RecentProjects from '../Components_c4p/RecentProjects';
import AnimatedBackground from '../Components_c4p/AnimatedBackground';
import AboutUs from '../Components_c4p/AboutUs';
import LogoSection from '../Components_c4p/LogoSection';
import DonatingProcess from '../Components_c4p/Joinus';
// import VolunteerSlider from '../Components_c4p/VolunteerSlider';
// import ViewProjects from '../Components_c4p/ViewProjects';

export default function Care4poor() {
  return (
    <>
      <HomeSection />
      <AboutUs />
      <CharityServices />
      <RecentProjects />
      <AnimatedBackground />
      <div className="bg-white">
        <VideoSection />
      </div>
      {/* <VolunteerSlider /> */}
      <LogoSection />
        {/* <DonatingProcess /> */}
      {/* <ViewProjects /> */}
    </>
  );
}
