import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaBehance,
} from "react-icons/fa";
import img from "../assets/volunteers/1.png";

import "swiper/css";

const volunteers = [
  { name: "Alexander Joseph", role: "Volunteer", img: img },
  { name: "Olivia Patricia", role: "Volunteer", img: img },
  { name: "Ethan David", role: "Volunteer", img: img },
  { name: "Michel Connor", role: "Volunteer", img: img },
  { name: "Sarah Thompson", role: "Volunteer", img: img },
  { name: "James Nolan", role: "Volunteer", img: img },
  { name: "Emily Stone", role: "Volunteer", img: img },
];

const VolunteerSlider = () => {
  return (
    <section className="py-16 bg-[#f7f7f7] text-center">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-orange-500 font-semibold mb-2">Our Volunteer</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Meet The Optimistic Volunteer
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {volunteers.map((vol, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 group">
                <img
                  src={vol.img}
                  alt={vol.name}
                  className="w-full h-80 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{vol.name}</h3>
                  <p className="text-sm text-gray-500">{vol.role}</p>
                  <div className="flex justify-center mt-4 gap-4 text-gray-600 group-hover:text-black transition-all duration-300">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF className="hover:text-blue-500 cursor-pointer text-xl" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="hover:text-sky-500 cursor-pointer text-xl" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="hover:text-pink-500 cursor-pointer text-xl" />
                    </a>
                    <a
                      href="https://behance.net"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaBehance className="hover:text-blue-700 cursor-pointer text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default VolunteerSlider;
