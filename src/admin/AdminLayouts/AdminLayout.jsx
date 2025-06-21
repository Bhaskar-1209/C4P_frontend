import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../AdminComponents/Sidebar";
import { FaBars, FaTimes } from "react-icons/fa";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Sidebar - mobile and desktop handling */}
      <div>
        {/* Mobile Sidebar - hidden by default, shows on toggle */}
       <div
  className={`fixed h-full bg-gray-800 z-50 
  ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
>
  <Sidebar />
</div>

        {/* Desktop Sidebar - always visible */}
        <div className="hidden md:block w-64 bg-gray-800 h-full fixed">
          <Sidebar />
        </div>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col pl-0 md:pl-64 transition-all duration-300">
        {/* Topbar for mobile */}
        <div className="md:hidden bg-gray-800 p-4 flex items-center justify-between shadow">
          <button onClick={toggleSidebar}>
            {isSidebarOpen ? (
              <FaTimes className="text-white text-2xl" />
            ) : (
              <FaBars className="text-white text-2xl" />
            )}
          </button>
          <h1 className="text-lg font-bold">Admin Panel</h1>
        </div>

        {/* Page content */}
        <main className="p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
