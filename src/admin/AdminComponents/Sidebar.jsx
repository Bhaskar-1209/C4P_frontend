import { NavLink, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaProjectDiagram,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaKey,
  FaUserPlus,
  FaList,
  FaCloudUploadAlt,
} from "react-icons/fa";
import { useState } from "react";

const Sidebar = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 768) setOpen(false); // auto-close on small screens
  };

  const navLinkClass = ({ isActive }) =>
    `flex items-center px-4 py-2 rounded text-sm font-medium transition ${
      isActive ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-700"
    }`;

  // Define nav items
  const commonLinks = [
    {
      to: "/admin/dashboard",
      name: "Dashboard",
      icon: <FaTachometerAlt className="mr-2" />,
    },
    {
      to: "/admin/upload",
      name: "Upload",
      icon: <FaCloudUploadAlt className="mr-2" />,
    },
    {
      to: "/admin/projects",
      name: "Projects",
      icon: <FaProjectDiagram className="mr-2" />,
    },
    {
      to: "/admin/change-password",
      name: "Change Password",
      icon: <FaKey className="mr-2" />,
    },
  ];

  const adminLinks = [
    {
      to: "/admin/user-list",
      name: "User List",
      icon: <FaList className="mr-2" />,
    },
    {
      to: "/admin/add-user",
      name: "Add User",
      icon: <FaUserPlus className="mr-2" />,
    },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden fixed z-50 top-4 left-4">
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-800 bg-white p-2 rounded shadow focus:outline-none"
        >
          <FaBars />
        </button>
      </div>

      {/* Overlay (mobile only) */}
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed top-0 left-0 h-full w-64 bg-gray-900 text-white z-40 p-4 transition-transform duration-300`}
      >
        <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
        <nav className="flex flex-col gap-2">
          {commonLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={navLinkClass}
              onClick={handleLinkClick}
            >
              {link.icon} {link.name}
            </NavLink>
          ))}

          {role === "admin" &&
            adminLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={navLinkClass}
                onClick={handleLinkClick}
              >
                {link.icon} {link.name}
              </NavLink>
            ))}
        </nav>

        <button
          onClick={handleLogout}
          className="flex items-center mt-6 px-4 py-2 text-sm font-medium text-red-400 hover:text-red-600"
        >
          <FaSignOutAlt className="mr-2" /> Logout
        </button>
      </div>
    </>
  );
};

export default Sidebar;
