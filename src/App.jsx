import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  Outlet,
} from "react-router-dom";

const Navbar = lazy(() => import("./Components_c4p/Navbar"));
const ContactHero = lazy(() => import("./Components_c4p/ContactUS_bg"));
const Footer = lazy(() => import("./Components_c4p/Footer"));
const Care4Poor = lazy(() => import("./pages/care4poor"));
const ViewProjects = lazy(() => import("./Components_c4p/ViewProjects"));
const DonatingProcess = lazy(() => import("./Components_c4p/Joinus"));
const AboutUsNav = lazy(() => import("./Components_c4p/AboutUsNav"));
const ProjectDetails = lazy(() => import("./Components_c4p/ReadMore"));
const UploadProject = lazy(() => import("./admin/AdminPages/Upload"));
const AdminLayout = lazy(() => import("./admin/AdminLayouts/AdminLayout"));
const Dashboard = lazy(() => import("./admin/AdminPages/Dashboard"));
const Users = lazy(() => import("./admin/AdminPages/Upload"));
const Projects = lazy(() => import("./admin/AdminPages/Projects"));
const AddUser = lazy(() => import("./admin/AdminPages/AddUser"));
const Login = lazy(() => import("./admin/AdminPages/Login"));
const UserList = lazy(() => import("./admin/AdminPages/UserList"));
const ChangePassword = lazy(() => import("./admin/AdminPages/ChangePassword"));

const RequireAuth = ({ children }) => {
  const token = sessionStorage.getItem("token");
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
  const token = sessionStorage.getItem("token");

  return (
    <Router>
      <Suspense fallback={<div className="p-6 text-white">Loading...</div>}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Care4Poor />} />
            <Route path="/contact" element={<ContactHero />} />
            <Route path="/more-project" element={<ViewProjects />} />
            <Route path="/join-us" element={<DonatingProcess />} />
            <Route path="/about-us" element={<AboutUsNav />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/upload" element={<UploadProject />} />
          </Route>
          <Route path="/login" element={<Login />} />
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
          <Route path="*" element={<div className="p-6">404 - Not Found</div>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
