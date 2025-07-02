import React, { useState, useEffect } from 'react';
import formImage from '../assets/background/aboutus.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const url =
      'https://script.google.com/macros/s/AKfycbxDHGLbpSQyLeT3ZNuWJqzSiLCcwjvBTxBzhkKpln--_6lrIIF21aJtlumnliuBIoBP/exec';

    const payload = new FormData();
    payload.append('your-name', formData.name);
    payload.append('your-email', formData.email);
    payload.append('your-number', formData.number);
    payload.append('your-msg', formData.message);

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: payload,
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', number: '', message: '' });
      } else {
        toast.error('Failed to send message. Try again.');
      }
    } catch (err) {
      toast.error('Error sending message. Check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#ebe6e0] py-16 px-4">
      <ToastContainer />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 relative" data-aos="fade-right">
          <img
            src={formImage}
            alt="Volunteer"
            className="w-full h-auto object-contain"
          />
          <div className="absolute top-0 left-0 w-40 h-40 bg-[#3a5f50] rounded-full blur-3xl opacity-30 -z-10"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#f59e0b] rounded-full blur-3xl opacity-30 -z-10"></div>
        </div>

        <div
          className="w-full md:w-1/2 bg-white rounded-3xl border border-gray-200 p-8 shadow"
          data-aos="fade-left"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#94ae81]"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full border border-gray-300 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#94ae81]"
            />
            <input
              type="tel"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full border border-gray-300 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#94ae81]"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type Your Message"
              rows={4}
              required
              className="w-full border border-gray-300 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#94ae81] resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-[#3a5f50] text-white px-6 py-3 rounded-full hover:bg-[#2f4e43] transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send a Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
