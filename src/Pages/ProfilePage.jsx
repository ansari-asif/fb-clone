// ProfilePage.js

import { Box } from '@mui/material';
import React from 'react';

const ProfilePage = () => {
  return (
    <Box flex={4} p={2}>
    <div className="bg-gray-100 min-h-screen">
      {/* Cover Photo */}
      <div className="bg-cover bg-center h-48" style={{ backgroundImage: 'url("https://via.placeholder.com/1500x300")' }}>
        {/* Profile Picture */}
        <div className="flex justify-center items-end h-full">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white"
          />
        </div>
      </div>

      {/* Profile Information */}
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-semibold">John Doe</h2>
        <p className="text-gray-600 mb-4">Web Developer at XYZ Company</p>

        {/* About Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">About Me</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        {/* Contact Information */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
          <ul className="list-disc pl-6">
            <li>Email: john@example.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Location: City, Country</li>
          </ul>
        </div>

        {/* Friends Section */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Friends</h3>
          <div className="flex space-x-4">
            {/* Friend 1 */}
            <div>
              <img
                src="https://via.placeholder.com/50"
                alt="Friend 1"
                className="w-12 h-12 rounded-full"
              />
              <p className="text-center mt-2">Friend 1</p>
            </div>

            {/* Friend 2 */}
            <div>
              <img
                src="https://via.placeholder.com/50"
                alt="Friend 2"
                className="w-12 h-12 rounded-full"
              />
              <p className="text-center mt-2">Friend 2</p>
            </div>

            {/* Add more friends as needed */}
          </div>
        </div>
      </div>
    </div>
    </Box>
  );
};

export default ProfilePage;
