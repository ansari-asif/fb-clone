// EditProfilePage.js

import { Box } from '@mui/material';
import React, { useState } from 'react';

const EditProfilePage = () => {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    profilePhoto: '',
    coverPhoto: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the formData to the server to update the user's profile.
    console.log('Form submitted with data:', formData);
  };

  return (
    <Box flex={4} p={2}>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="bio" className="block text-sm font-medium text-gray-600">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
              rows="4"
            />
          </div>
          {/* Profile Photo Input */}
          <div className="mb-4">
            <label htmlFor="profilePhoto" className="block text-sm font-medium text-gray-600">
              Profile Photo
            </label>
            <input
              type="file"
              id="profilePhoto"
              name="profilePhoto"
              onChange={handleFileChange}
              className="mt-1 p-2 w-full border rounded"
            />
          </div>

          {/* Cover Photo Input */}
          <div className="mb-4">
            <label htmlFor="coverPhoto" className="block text-sm font-medium text-gray-600">
              Cover Photo
            </label>
            <input
              type="file"
              id="coverPhoto"
              name="coverPhoto"
              onChange={handleFileChange}
              className="mt-1 p-2 w-full border rounded"
            />
          </div>

          {/* ... (other fields) ... */}

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
    </Box>
  );
};

export default EditProfilePage;
