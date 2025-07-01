import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("bhaskar@gmail.com");
  const [password, setPassword] = useState("Ambala@123");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://c4p-backend.onrender.com/api/users/login", {
        email,
        password,
      });

      // ✅ Save to localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("name", res.data.name);

      // ✅ Log the values to console
      console.log("Token:", res.data.token);
      console.log("Role:", res.data.role);
      console.log("Name:", res.data.name);

      // ✅ Redirect to admin dashboard
      navigate("/admin/dashboard");
    } catch (err) {
      alert("Login failed: " + (err.response?.data?.message || "Server error"));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow-md w-80 space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Admin Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
