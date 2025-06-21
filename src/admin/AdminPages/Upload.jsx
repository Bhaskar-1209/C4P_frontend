import React, { useState } from 'react';
import axios from 'axios';

const UploadProject = () => {
  const [formData, setFormData] = useState({ title: '', description: '', googleFormLink: '' });
  const [contributors, setContributors] = useState(['']);
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImages(selectedFiles);
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
    setMessage('');

    if (images.length !== 2) return setMessage('Please upload exactly 2 images.');

    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('googleFormLink', formData.googleFormLink);
    contributors.forEach(c => data.append('contributors', c));
    images.forEach(img => data.append('images', img));

    try {
      setUploading(true);
      const token = localStorage.getItem("token");
      const res = await axios.post("https://c4p-backend.onrender.com/api/projects/upload", data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setMessage('Project uploaded successfully!');
      setSuccess(true);
      setFormData({ title: '', description: '', googleFormLink: '' });
      setContributors(['']);
      setImages([]);
    } catch (err) {
      setMessage('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6 md:p-10">
      <div className="bg-gray-800 text-white rounded shadow-lg w-full max-w-4xl mx-auto p-8">
        <h2 className="text-2xl font-bold mb-6">Upload Project</h2>
        {message && <div className={`text-sm mb-4 ${success ? 'text-green-400' : 'text-red-400'}`}>{message}</div>}

        <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-5">
          <div>
            <label className="block text-sm mb-1">Project Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white" required />
          </div>

          <div>
            <label className="block text-sm mb-1">Description</label>
            <textarea name="description" value={formData.description} onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white" rows="4" required></textarea>
          </div>

          <div>
            <label className="block text-sm mb-1">Google Form Link</label>
            <input type="url" name="googleFormLink" value={formData.googleFormLink} onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white" required />
          </div>

          <div>
            <label className="block text-sm mb-1">Key Contributors</label>
            {contributors.map((c, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input type="text" value={c} onChange={(e) => handleContributorChange(index, e.target.value)}
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white" required />
                {contributors.length > 1 && (
                  <button type="button" onClick={() => removeContributor(index)} className="text-red-400 text-xl">&times;</button>
                )}
              </div>
            ))}
            <button type="button" onClick={addContributor} className="text-sm text-blue-400 hover:underline">+ Add Another Contributor</button>
          </div>

          <div>
            <label className="block text-sm mb-1">Upload 2 Images</label>
            <input type="file" name="images" onChange={handleFileChange}
              className="w-full text-white" multiple accept="image/*" required />
          </div>

          {images.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {images.map((image, index) => (
                <div key={index} className="border rounded overflow-hidden">
                  <img src={URL.createObjectURL(image)} alt={`Preview ${index + 1}`} className="w-full h-40 object-cover" />
                </div>
              ))}
            </div>
          )}

          <button type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded" disabled={uploading}>
            {uploading ? 'Uploading...' : 'Upload Project'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadProject;
