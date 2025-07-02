import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  Outlet,
} from "react-router-dom";

import Navbar from "./Components_c4p/Navbar";
import ContactHero from "./Components_c4p/ContactUS_bg";
import Footer from "./Components_c4p/Footer";
import Care4Poor from "./pages/care4poor";
import ViewProjects from "./Components_c4p/ViewProjects";
import DonatingProcess from "./Components_c4p/Joinus";
import AboutUsNav from "./Components_c4p/AboutUsNav";
import ProjectDetails from "./Components_c4p/ReadMore";
import UploadProject from "./admin/AdminPages/Upload";

import AdminLayout from "./admin/AdminLayouts/AdminLayout";
import Dashboard from "./admin/AdminPages/Dashboard";
import Users from "./admin/AdminPages/Upload";
import Projects from "./admin/AdminPages/Projects";
import AddUser from "./admin/AdminPages/AddUser";
import Login from "./admin/AdminPages/Login";
import UserList from "./admin/AdminPages/UserList";
import ChangePassword from "./admin/AdminPages/ChangePassword";

const RequireAuth = ({ children }) => {
  const token = sessionStorage.getItem("token"); // ✅ FIXED
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

const PublicLayout = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Outlet />
      {!isAdminRoute && <Footer />}
    </>
  );
};

const App = () => {
  const token = sessionStorage.getItem("token"); // ✅ FIXED

  return (
    <Router>
      <Routes>
        {/* Public layout wrapper */}
        <Route element={<PublicLayout />}>
          {/* Public Routes */}
          <Route path="/" element={<Care4Poor />} />
          <Route path="/contact" element={<ContactHero />} />
          <Route path="/moreProject" element={<ViewProjects />} />
          <Route path="/joinUs" element={<DonatingProcess />} />
          <Route path="/aboutus" element={<AboutUsNav />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/upload" element={<UploadProject />} />
        </Route>

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />

        {/* Show login if token is not available when landing on /admin */}
        <Route
          path="/admin"
          element={
            token ? (
              <Navigate to="/admin/dashboard" replace />
            ) : (
              <Login />
            )
          }
        />

        {/* Protected Admin Routes */}
        <Route
          path="/admin/*"
          element={
            <RequireAuth>
              <AdminLayout />
            </RequireAuth>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="upload" element={<Users />} />
          <Route path="projects" element={<Projects />} />
          <Route path="user-list" element={<UserList />} />
          <Route path="add-user" element={<AddUser />} />
          <Route path="change-password" element={<ChangePassword />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<div className="p-6">404 - Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
