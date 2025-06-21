import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RecentProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchLatestProjects = async () => {
      try {
        const res = await axios.get("https://c4p-backend.onrender.com/api/projects");
        const latestThree = res.data.slice(0, 3);
        setProjects(latestThree);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };

    fetchLatestProjects();
  }, []);

  return (
    <div className="bg-[#f9f6ef] py-16 px-6 sm:px-10 md:px-20 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
        <div>
          <p className="text-[#f59e0b] font-semibold mb-1">Complete Projects</p>
          <h2 className="text-4xl font-bold text-black">Our Recent Project</h2>
        </div>
        <Link
          to="/moreProject"
          className="bg-[#0d6157] hover:bg-[#084c45] text-white px-6 py-2 rounded-full font-medium text-sm transition"
        >
          View All Project →
        </Link>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-lg"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
