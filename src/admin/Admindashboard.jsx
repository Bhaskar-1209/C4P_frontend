import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import AdminLayout from "./AdminLayouts/AdminLayout";
import Dashboard from "./AdminPages/Dashboard";
import Users from "./AdminPages/User";
import Projects from "./AdminPages/Projects";
import AddUser from "./AdminPages/AddUser";
import Login from "./AdminPages/Login";
import ProtectedRoute from "./AdminComponents/ProtectedRoute";
import UserList from "./AdminPages/UserList";

const RequireAuth = ({ children }) => {
  const token = sessionStorage.getItem("token");
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Redirect /admin to /login if not logged in */}
        <Route
          path="/admin"
          element={
            sessionStorage.getItem("token") ? (
              <Navigate to="/admin/dashboard" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Protected /admin routes */}
        <Route
          path="/admin/*"
          element={
            <RequireAuth>
              <AdminLayout />
            </RequireAuth>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="projects" element={<Projects />} />
          <Route path="user-list" element={<UserList />} />
          <Route path="add-user" element={<AddUser />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<div className="p-6">404 - Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
