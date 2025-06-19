import React, { useState } from 'react';
import axios from 'axios';

const UploadProject = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    googleFormLink: '',
  });
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImages(selectedFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (images.length !== 2) {
      setMessage('Please upload exactly 2 images.');
      return;
    }

    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('googleFormLink', formData.googleFormLink);
    images.forEach((img) => data.append('images', img));

    try {
      setUploading(true);
      const res = await axios.post('http://localhost:5050/api/projects/upload', data);
      setMessage('Project uploaded successfully!');
      setFormData({ title: '', description: '', googleFormLink: '' });
      setImages([]);
    } catch (err) {
      setMessage('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f6ef] p-6 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl w-full max-w-2xl p-8 space-y-6"
        encType="multipart/form-data"
      >
        <h2 className="text-2xl font-bold text-gray-800">Upload Project</h2>

        {message && <div className="text-sm text-red-500">{message}</div>}

        <div>
          <label className="block text-sm font-semibold mb-1">Project Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Google Form Link</label>
          <input
            type="url"
            name="googleFormLink"
            value={formData.googleFormLink}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Upload 2 Images</label>
          <input
            type="file"
            name="images"
            onChange={handleFileChange}
            className="w-full"
            multiple
            accept="image/*"
            required
          />
        </div>

        {images.length > 0 && (
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div key={index} className="border rounded overflow-hidden">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-40 object-cover"
                />
              </div>
            ))}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-[#0d6157] hover:bg-[#084c45] text-white py-2 rounded text-sm font-semibold"
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : 'Upload Project'}
        </button>
      </form>
    </div>
  );
};

export default UploadProject;
