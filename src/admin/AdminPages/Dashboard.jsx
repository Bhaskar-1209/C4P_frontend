import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [stats, setStats] = useState({
    users: 0,
    projects: 0,
    activeProjects: 0,
    expiredProjects: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [usersRes, projectsRes, activeRes, expiredRes] = await Promise.all([
          axios.get("https://c4p-backend.onrender.com/api/users/count"),
          axios.get("https://c4p-backend.onrender.com/api/projects/count"),
          axios.get("https://c4p-backend.onrender.com/api/projects/active"),
          axios.get("https://c4p-backend.onrender.com/api/projects/expired"),
        ]);

        setStats({
          users: usersRes.data.count || 0,
          projects: projectsRes.data.count || 0,
          activeProjects: activeRes.data.count || 0,
          expiredProjects: expiredRes.data.count || 0,
        });
      } catch (error) {
        console.error("Failed to fetch dashboard stats:", error);
      }
    };

    fetchStats();
  }, []);

  const cardClass =
    "rounded-lg shadow-md p-6 text-white transition transform hover:scale-105 duration-300";

  return (
    <div className="min-h-screen w-full p-4 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6">Dashboard Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className={`${cardClass} bg-blue-600`}>
          <h3 className="text-lg font-semibold">Users</h3>
          <p className="text-4xl font-bold">{stats.users}</p>
        </div>
        <div className={`${cardClass} bg-green-600`}>
          <h3 className="text-lg font-semibold">Projects</h3>
          <p className="text-4xl font-bold">{stats.projects}</p>
        </div>
        <div className={`${cardClass} bg-yellow-600`}>
          <h3 className="text-lg font-semibold">Active Projects</h3>
          <p className="text-4xl font-bold">{stats.activeProjects}</p>
        </div>
        <div className={`${cardClass} bg-red-600`}>
          <h3 className="text-lg font-semibold">Expired Projects</h3>
          <p className="text-4xl font-bold">{stats.expiredProjects}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
