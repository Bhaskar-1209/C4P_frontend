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
      <div className="text-center mb-12 mt-12">
        <h2 className="text-5xl font-bold text-[#3a5f50]">Explore Our Projects</h2>
        <p className="text-[#6c757d] mt-4 text-2xl">
          Discover how we're making an impact, one initiative at a time.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-[350px] object-cover transition-all duration-500"
            />

            <div className="absolute top-0 left-0 w-full h-full bg-[#94ae81] text-white p-6 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out flex-col justify-center hidden md:flex">
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-sm line-clamp-2">{project.description}</p>
              <button
                onClick={() => navigate(`/projects/${project._id}`)}
                className="mt-4 bg-white text-[#94ae81] font-semibold text-sm px-4 py-2 rounded-full hover:bg-[#7b9966] hover:text-white transition"
              >
                Read More →
              </button>
            </div>

            <div className="md:hidden bg-white p-4">
              <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
              <p className="text-sm text-gray-700 mt-1 line-clamp-2">{project.description}</p>
              <button
                onClick={() => navigate(`/projects/${project._id}`)}
                className="mt-3 inline-block bg-[#3a5f50] text-white text-sm px-4 py-2 rounded-full hover:bg-[#2e4c40] transition"
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
