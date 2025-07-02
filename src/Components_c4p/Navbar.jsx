import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo_1 from '../assets/logos/1.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [navScrolled, setNavScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const desktopDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
      if (desktopDropdownOpen) setDesktopDropdownOpen(false);
      if (mobileDropdownOpen) setMobileDropdownOpen(false);
    };

    const handleClickOutside = (event) => {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target)
      ) {
        setDesktopDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [desktopDropdownOpen, mobileDropdownOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setMobileDropdownOpen(false);
  };

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        navScrolled ? 'bg-black py-2' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo + Name */}
        <div className="flex items-center space-x-3 text-white font-bold">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo_1}
              alt="Logo"
              className={`transition-all duration-300 ${
                navScrolled ? 'w-16' : 'w-28'
              } h-auto`}
            />
            {navScrolled && (
              <span className="text-lg transition-all duration-300 text-[#94ae81]">CARE4POOR</span>
            )}
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-8 text-white text-lg items-center">
          <li><Link to="/login" className="hover:text-green-400 login">Login</Link></li>
          <li><Link to="/" className="hover:text-green-400">Home</Link></li>
          <li><Link to="/about-us" className="hover:text-green-400">About Us</Link></li>
          <li className="relative" ref={desktopDropdownRef}>
            <button
              onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
              className="hover:text-green-400"
            >
              Our Initiatives
            </button>
            {desktopDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-black shadow-lg text-white rounded z-50">
                <li className="px-4 py-2 hover:bg-green-600 cursor-pointer"><a href='https://care4poor.netlify.app/'>score4change</a></li>
                <li className="px-4 py-2 hover:bg-green-600 cursor-pointer">debate4change</li>
                <li className="px-4 py-2 hover:bg-green-600 cursor-pointer">express4change</li>
                <li className="px-4 py-2 hover:bg-green-600 cursor-pointer">innovate4change</li>
              </ul>
            )}
          </li>
          <li><Link to="/more-project" className="hover:text-green-400">Projects</Link></li>
          <li><Link to="/join-us" className="hover:text-green-400">Join Us</Link></li>
          <li><Link to="/contact" className="hover:text-green-400">Contact Us</Link></li>
        </ul>

        {/* Mobile Icon Toggle */}
        <div className="lg:hidden text-white text-3xl" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black text-white z-40 transition-transform duration-300 ease-in-out transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 pt-6">
          <div className="flex items-center space-x-2">
            <img src={logo_1} alt="Logo" className="w-10 h-auto" />
            <span className="text-xl font-semibold">CARE4POOR</span>
          </div>
          <button className="text-3xl" onClick={toggleMenu}>
            <FaTimes />
          </button>
        </div>

        <ul className="mt-10 flex flex-col items-center space-y-6 text-2xl">
          <li><Link to="/" onClick={toggleMenu} className="hover:text-green-400">Home</Link></li>
          <li><Link to="/about-us" onClick={toggleMenu} className="hover:text-green-400">About Us</Link></li>
          <li>
            <button onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)} className="hover:text-green-400">
              Our Initiatives {mobileDropdownOpen ? '▲' : '▼'}
            </button>
            {mobileDropdownOpen && (
              <ul className="mt-2 text-lg space-y-2">
                <li className="hover:text-green-400 cursor-pointer">score4change</li>
                <li className="hover:text-green-400 cursor-pointer">debate4change</li>
                <li className="hover:text-green-400 cursor-pointer">express4change</li>
                <li className="hover:text-green-400 cursor-pointer">innovate4change</li>
              </ul>
            )}
          </li>
          <li><Link to="/more-project" onClick={toggleMenu} className="hover:text-green-400">Upcoming Events</Link></li>
          <li><Link to="/join-us" onClick={toggleMenu} className="hover:text-green-400">Join Us</Link></li>
          <li><Link to="/contact" onClick={toggleMenu} className="hover:text-green-400">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;