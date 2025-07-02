import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const OngoingProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get("https://c4p-backend.onrender.com/api/projects");
      setProjects(res.data);
    } catch (err) {
      console.error("Failed to fetch projects", err);
      toast.error("Failed to load projects");
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this project?");
    if (!confirmed) return;

    try {
      await axios.delete(`https://c4p-backend.onrender.com/api/projects/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });
      toast.success("Project deleted successfully");
      setProjects((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
      toast.error("Failed to delete project");
    }
  };

  return (
    <div className="bg-gray-900 rounded shadow p-4 mt-8 text-white">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Ongoing Projects</h3>
        <span className="text-sm">{projects.length} Projects</span>
      </div>

      {/* Desktop View */}
      <div className="overflow-x-auto hidden md:block">
        <table className="w-full table-auto text-left text-sm">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-2">Project</th>
              <th className="p-2">Date</th>
              <th className="p-2">Uploaded By</th>
              <th className="p-2">Contributors</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p._id} className="border-t border-gray-700">
                <td className="p-2">{p.title}</td>
                <td className="p-2">{new Date(p.createdAt).toLocaleDateString()}</td>
                <td className="p-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                        p.uploader?.name || "User"
                      )}&background=random`}
                      alt="avatar"
                      className="rounded-full w-6 h-6"
                    />
                    <div>
                      <p className="font-medium">{p.uploader?.name || "Unknown"}</p>
                      <p className="text-xs text-gray-400">{p.uploader?.email}</p>
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  {p.contributors?.length > 0
                    ? p.contributors.join(", ")
                    : "No contributors"}
                </td>
                <td className="p-2">
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(p._id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            {projects.length === 0 && (
              <tr>
                <td colSpan="5" className="p-4 text-center">
                  No projects found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-4">
        {projects.map((p) => (
          <div
            key={p._id}
            className="bg-gray-800 p-4 rounded shadow border border-gray-600"
          >
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold text-lg">{p.title}</h4>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDelete(p._id)}
              >
                <FaTrash />
              </button>
            </div>
            <p className="text-sm mb-1">
              <span className="font-medium">Date: </span>
              {new Date(p.createdAt).toLocaleDateString()}
            </p>
            <div className="flex items-center gap-3 my-2">
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                  p.uploader?.name || "User"
                )}&background=random`}
                alt="avatar"
                className="rounded-full w-8 h-8"
              />
              <div>
                <p className="font-medium">{p.uploader?.name || "Unknown"}</p>
                <p className="text-xs text-gray-400">{p.uploader?.email}</p>
              </div>
            </div>
            <p className="text-sm mb-1">
              <span className="font-medium">Contributors: </span>
              {p.contributors?.length > 0 ? p.contributors.join(", ") : "None"}
            </p>
            <a
              href={p.googleFormLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 text-sm underline"
            >
              Google Form
            </a>
          </div>
        ))}
        {projects.length === 0 && (
          <p className="text-center">No projects found.</p>
        )}
      </div>
    </div>
  );
};

export default OngoingProjects;
