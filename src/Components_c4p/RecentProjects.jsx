import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const RecentProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLatestProjects = async () => {
      try {
        const res = await axios.get("https://c4p-backend.onrender.com/api/projects");
        const latestThree = res.data.slice(0, 3); // or use .slice(0, 3)
        setProjects(latestThree);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
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
          <h2 className="text-4xl font-bold text-black">Our Recent Projects</h2>
        </div>
        <Link
          to="/moreProject"
          className="bg-[#0d6157] hover:bg-[#084c45] text-white px-6 py-2 rounded-full font-medium text-sm transition"
        >
          View All Projects →
        </Link>
      </div>

      {/* Projects Grid */}
      {loading ? (
        <p className="text-center text-gray-500">Loading projects...</p>
      ) : projects.length === 0 ? (
        <p className="text-center text-gray-500">No projects available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              {/* Image */}
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-[350px] object-cover transition-all duration-500"
              />

              {/* Desktop Hover Overlay */}
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

              {/* Mobile Static Description */}
              <div className="md:hidden bg-white p-4">
                <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                <p className="text-sm text-gray-700 mt-1 line-clamp-2">
                  {project.description}
                </p>
                <Link
                  to={`/projects/${project._id}`}
                  className="mt-3 inline-block bg-[#0d6157] text-white text-sm px-4 py-2 rounded-full hover:bg-[#084c45] transition"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentProjects;
