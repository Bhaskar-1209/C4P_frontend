import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ViewProjects = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('https://c4p-backend.onrender.com/api/projects');
        setProjects(res.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="bg-[#94ae81]/50 py-16 px-6 md:px-16">
      {/* Heading */}
      <div className="text-center mb-12 mt-12">
        <h2 className="text-5xl font-bold text-[#3a5f50]">Explore Our Projects</h2>
        <p className="text-[#6c757d] mt-4 text-2xl">
          Discover how we're making an impact, one initiative at a time.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            {/* Image */}
            <img
              src={`https://c4p-backend.onrender.com/${project.images[0]}`}
              alt={project.title}
              className="w-full h-[350px] object-cover transition-all duration-500"
            />

            {/* Left-to-Right Hover Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#94ae81] text-white p-6 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out flex flex-col justify-center">
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-sm line-clamp-2">{project.description}</p>
            </div>

            {/* Hover Button */}
            <div className="absolute top-0 right-0 m-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <button
                onClick={() => navigate(`/projects/${project._id}`)}
                className="bg-white text-[#94ae81] border border-[#94ae81] text-sm px-4 py-1 rounded-full hover:bg-[#94ae81] hover:text-white transition"
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ViewProjects;
