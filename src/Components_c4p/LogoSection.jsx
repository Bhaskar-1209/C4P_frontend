import React from 'react';
import './LogoSection.css';
import logo_1 from '../assets/logos/1.png'
import logo_2 from '../assets/logos/2.png'
import logo_3 from '../assets/logos/3.png'
import logo_4 from '../assets/logos/4.png'
import logo_5 from '../assets/logos/5.png'
import logo_6 from '../assets/logos/6.png'

const logos = [
  // {
  //   name: 'CARE4POOR',
  //   img: logo_1,
  // },
  {
    name: 'THE CHANGEMAKERS LEAGUE',
    img: logo_2,
  },
  {
    name: 'SCORE4CHANGE',
    img: logo_3,
  },
  {
    name: 'INNOVATION4CHANGE',
    img: logo_4,
  },
  {
    name: 'EXPRESS4CHANGE',
    img: logo_5,
  },
  {
    name: 'DEBATE4CHANGE',
    img: logo_6,
  },
];

const LogoSection = () => {
  // Duplicate logos twice for a smooth seamless scroll
  const loopedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="logo-section-container">
      <h2 className="section-heading">
        Trusted by over <span className="highlight">90K+</span> companies worldwide
      </h2>

      <div className="marquee">
        <div className="marquee-content">
          {loopedLogos.map((logo, index) => (
            <div key={index} className="logo-item">
              <img src={logo.img} alt={logo.name} />
              <p>{logo.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
