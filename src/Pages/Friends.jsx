import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Friends = () => {
  return (
    <Box flex={4} p={2}>
      <div className="bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Friend Requests</h2>
        <div className="mb-4">
          <input
            type="text"
            className="w-full border p-2 rounded outline-none focus:outline-none"
            placeholder="Search friend requests..."
          />
        </div>
        {/* <!-- Friend Request Item 1 --> */}
        <div className="flex items-center justify-between border-b py-4">
          <div className="flex items-center">
            <Avatar alt="John" src="/static/images/avatar/1.jpg" className='w-10 h-10 rounded-full mr-4' />
            <div>
              <p className="font-semibold">John Doe</p>
              <p className="text-gray-600 text-sm">Wants to be your friend.</p>
            </div>
          </div>
          <div className="flex">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2">
              Accept
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
              Decline
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between border-b py-4">
          <div className="flex items-center">
            <img src="https://via.placeholder.com/40" alt="User" className="w-10 h-10 rounded-full mr-4"/>
            <div>
              <p className="font-semibold">Jane Doe</p>
              <p className="text-gray-600 text-sm">Wants to be your friend.</p>
            </div>
          </div>
          <div className="flex">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2">
              Accept
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
              Decline
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between border-b py-4">
          <div className="flex items-center">
            <img src="https://via.placeholder.com/40" alt="User" className="w-10 h-10 rounded-full mr-4"/>
            <div>
              <p className="font-semibold">Jane Doe</p>
              <p className="text-gray-600 text-sm">Wants to be your friend.</p>
            </div>
          </div>
          <div className="flex">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2">
              Accept
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
              Decline
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between border-b py-4">
          <div className="flex items-center">
            <img src="https://via.placeholder.com/40" alt="User" className="w-10 h-10 rounded-full mr-4"/>
            <div>
              <p className="font-semibold">Jane Doe</p>
              <p className="text-gray-600 text-sm">Wants to be your friend.</p>
            </div>
          </div>
          <div className="flex">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2">
              Accept
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
              Decline
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between border-b py-4">
          <div className="flex items-center">
            <img src="https://via.placeholder.com/40" alt="User" className="w-10 h-10 rounded-full mr-4"/>
            <div>
              <p className="font-semibold">Jane Doe</p>
              <p className="text-gray-600 text-sm">Wants to be your friend.</p>
            </div>
          </div>
          <div className="flex">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2">
              Accept
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
              Decline
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between border-b py-4">
          <div className="flex items-center">
            <img src="https://via.placeholder.com/40" alt="User" className="w-10 h-10 rounded-full mr-4"/>
            <div>
              <p className="font-semibold">Jane Doe</p>
              <p className="text-gray-600 text-sm">Wants to be your friend.</p>
            </div>
          </div>
          <div className="flex">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2">
              Accept
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
              Decline
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between border-b py-4">
          <div className="flex items-center">
            <img src="https://via.placeholder.com/40" alt="User" className="w-10 h-10 rounded-full mr-4"/>
            <div>
              <p className="font-semibold">Jane Doe</p>
              <p className="text-gray-600 text-sm">Wants to be your friend.</p>
            </div>
          </div>
          <div className="flex">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2">
              Accept
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
              Decline
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between border-b py-4">
          <div className="flex items-center">
            <img src="https://via.placeholder.com/40" alt="User" className="w-10 h-10 rounded-full mr-4"/>
            <div>
              <p className="font-semibold">Jane Doe</p>
              <p className="text-gray-600 text-sm">Wants to be your friend.</p>
            </div>
          </div>
          <div className="flex">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2">
              Accept
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
              Decline
            </button>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default Friends