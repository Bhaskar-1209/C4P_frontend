import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddUser = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    position: "",
    role: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email) && email.endsWith(".com");
  };

  const isValidPassword = (password) => {
    const isCorrectLength = password.length === 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
    const hasSequence = /(abc|bcd|cde|def|123|234|345|456|789|012)/i.test(password);
    return isCorrectLength && hasUppercase && hasLowercase && hasSpecialChar && !hasSequence;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(form.email)) {
      toast.error("Invalid email. Must contain '@' and end with '.com'");
      return;
    }

    if (!isValidPassword(form.password)) {
      toast.error(
        "Password must be exactly 8 characters long, contain at least 1 uppercase, 1 lowercase, 1 special character, and no sequences like '123' or 'abc'."
      );
      return;
    }

    try {
      const res = await axios.post("https://c4p-backend.onrender.com/api/users/register", form);
      sessionStorage.setItem("role", res.data.role);
      toast.success("User registered successfully!");
      setForm({
        name: "",
        email: "",
        position: "",
        role: "",
        password: "",
      });
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to register user");
    }
  };

  return (
    <div className="p-6 md:p-10">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <div className="bg-gray-800 text-white rounded shadow-lg w-full max-w-md mx-auto p-8">
        <h2 className="text-2xl font-bold mb-6">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white"
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white"
          />
          <input
            name="position"
            value={form.position}
            onChange={handleChange}
            placeholder="Position"
            required
            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white"
          />
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white"
          >
            <option value="">Select Role</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
          <div>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password (8 characters)"
              required
              className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white"
            />
            <div className="text-sm text-gray-400 mt-1">
              Characters: {form.password.length}/8
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            Register User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
