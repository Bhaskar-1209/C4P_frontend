import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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

    const { currentPassword, newPassword, confirmPassword } = formData;

    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error("All fields are required");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("New password and confirm password do not match");
      return;
    }

    if (!isValidPassword(newPassword)) {
      toast.error(
        "New password must be exactly 8 characters, include uppercase, lowercase, special character, and avoid sequences like '123' or 'abc'."
      );
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        "https://c4p-backend.onrender.com/api/users/change-password",
        { currentPassword, newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success(res.data.message || "Password updated successfully");
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-[#1a1e2d] text-white p-6 rounded-lg shadow-md">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <h2 className="text-2xl font-semibold mb-6">Change Password</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Current Password */}
        <div>
          <input
            type="password"
            name="currentPassword"
            placeholder="Current Password"
            value={formData.currentPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#2a2f40] text-white rounded border border-[#3b3f52] focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <p className="text-sm text-gray-400 mt-1">
            Characters: {formData.currentPassword.length}/8
          </p>
        </div>

        {/* New Password */}
        <div>
          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={formData.newPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#2a2f40] text-white rounded border border-[#3b3f52] focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <p className="text-sm text-gray-400 mt-1">
            Characters: {formData.newPassword.length}/8
          </p>
        </div>

        {/* Confirm Password */}
        <div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm New Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#2a2f40] text-white rounded border border-[#3b3f52] focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <p className="text-sm text-gray-400 mt-1">
            Characters: {formData.confirmPassword.length}/8
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
