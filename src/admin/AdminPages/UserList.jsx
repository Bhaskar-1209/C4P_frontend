import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("https://c4p-backend.onrender.com/api/users");
      setUsers(res.data);
    } catch (err) {
      console.error("Fetch users error", err);
    }
  };

  const updateRole = async (userId, newRole) => {
    try {
      await axios.put(`https://c4p-backend.onrender.com/api/users/${userId}/role`, {
        role: newRole,
      });
      fetchUsers();
    } catch (err) {
      console.error("Update role error", err);
    }
  };

  const deleteUser = async (userId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`https://c4p-backend.onrender.com/api/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // assuming token is stored in localStorage
        },
      });
      fetchUsers();
    } catch (err) {
      console.error("Delete user error", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-4 md:p-10">
      <div className="bg-gray-800 text-white rounded shadow-lg w-full max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6 text-white">User Management</h2>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm text-left text-white">
            <thead className="bg-gray-700 text-gray-200">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Position</th>
                <th className="p-3">Role</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u._id} className="border-t border-gray-600">
                  <td className="p-3">{u.name}</td>
                  <td className="p-3">{u.email}</td>
                  <td className="p-3">{u.position}</td>
                  <td className="p-3">
                    <select
                      value={u.role}
                      onChange={(e) => updateRole(u._id, e.target.value)}
                      className="bg-gray-700 text-white border border-gray-500 rounded px-2 py-1"
                    >
                      <option value="admin">Admin</option>
                      <option value="editor">Editor</option>
                    </select>
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => deleteUser(u._id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs"
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-4 text-center text-gray-400">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {users.map((u) => (
            <div
              key={u._id}
              className="bg-gray-700 rounded p-4 shadow border border-gray-600 text-white"
            >
              <p>
                <span className="font-semibold text-gray-300">Name:</span>{" "}
                {u.name}
              </p>
              <p>
                <span className="font-semibold text-gray-300">Email:</span>{" "}
                {u.email}
              </p>
              <p>
                <span className="font-semibold text-gray-300">Position:</span>{" "}
                {u.position}
              </p>
              <div className="mt-2">
                <label className="block font-semibold mb-1 text-gray-300">
                  Role
                </label>
                <select
                  value={u.role}
                  onChange={(e) => updateRole(u._id, e.target.value)}
                  className="bg-gray-800 text-white border border-gray-600 rounded px-2 py-1 w-full"
                >
                  <option value="admin">Admin</option>
                  <option value="editor">Editor</option>
                </select>
              </div>
              <button
                onClick={() => deleteUser(u._id)}
                className="mt-3 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm w-full"
              >
                🗑️ Delete
              </button>
            </div>
          ))}
          {users.length === 0 && (
            <p className="text-center text-gray-400">No users found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserList;
