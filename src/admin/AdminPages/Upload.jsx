import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UploadProject = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    googleFormLink: 'https://dalchinii.ch/products/green-mango-500-g',
  });

  const [contributors, setContributors] = useState(['']);
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = async (e) => {
    const selected = Array.from(e.target.files);
    if (selected.length !== 2) {
      toast.error("❌ Please select exactly 2 images.");
      setImages([]);
      return;
    }

    const base64Images = await Promise.all(selected.map(file => toBase64(file)));
    setImages(base64Images);
  };

  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  const handleContributorChange = (index, value) => {
    const updated = [...contributors];
    updated[index] = value;
    setContributors(updated);
  };

  const addContributor = () => setContributors([...contributors, '']);
  const removeContributor = (index) => setContributors(contributors.filter((_, i) => i !== index));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);

    // Field validations
    if (!formData.title.trim()) return toast.error("❌ Title is required.");
    if (!formData.description.trim()) return toast.error("❌ Description is required.");
    if (!formData.googleFormLink.trim()) return toast.error("❌ Google Form Link is required.");
    if (contributors.some(c => !c.trim())) return toast.error("❌ All contributor fields must be filled.");
    if (images.length !== 2) return toast.error("❌ Please upload exactly 2 images.");

    const payload = {
      ...formData,
      contributors,
      images
    };

    try {
      setUploading(true);
      const token = sessionStorage.getItem("token");

      const res = await axios.post("https://c4p-backend.onrender.com/api/projects/upload", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      toast.success("✅ Project uploaded successfully!");
      setSuccess(true);
      setFormData({ title: '', description: '', googleFormLink: 'https://dalchinii.ch/products/green-mango-500-g' });
      setContributors(['']);
      setImages([]);
      document.getElementById("fileInput").value = "";
    } catch (err) {
      toast.error("❌ Upload failed. " + (err?.response?.data?.message || "Please try again."));
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6 md:p-10">
      <ToastContainer />
      <div className="bg-gray-800 text-white rounded shadow-lg w-full max-w-4xl mx-auto p-8">
        <h2 className="text-2xl font-bold mb-6">Upload Project</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input type="text" name="title" value={formData.title} onChange={handleInputChange}
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white" placeholder="Project Title" />

          <textarea name="description" value={formData.description} onChange={handleInputChange}
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white" placeholder="Description" rows="4" />

          <input type="url" name="googleFormLink" value={formData.googleFormLink} onChange={handleInputChange}
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white" />

          {contributors.map((c, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input type="text" value={c} onChange={(e) => handleContributorChange(index, e.target.value)}
                className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white" />
              {contributors.length > 1 && (
                <button type="button" onClick={() => removeContributor(index)} className="text-red-400 text-xl">&times;</button>
              )}
            </div>
          ))}
          <button type="button" onClick={addContributor} className="text-sm text-blue-400 hover:underline">+ Add Contributor</button>

          <input type="file" id="fileInput" name="images" onChange={handleFileChange}
            className="w-full text-white" multiple accept="image/*" />

          {images.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {images.map((image, index) => (
                <div key={index} className="border rounded overflow-hidden">
                  <img src={image} alt={`Preview ${index + 1}`} className="w-full h-40 object-cover" />
                </div>
              ))}
            </div>
          )}

          <button type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mt-4" disabled={uploading}>
            {uploading ? 'Uploading...' : 'Upload Project'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadProject;
