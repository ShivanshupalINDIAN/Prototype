import React from 'react';
import { Bird } from 'lucide-react';

interface HomeProps {
  userData: {
    name: string;
    email: string;
    gender: string;
    dateOfBirth: string;
    aadhaarId: string;
  };
}

export function Home({ userData }: HomeProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center p-8">
      <div className="text-center mb-8">
        <Bird className="w-20 h-20 text-amber-500 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-white mb-2">Welcome to Jatayu</h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
      </div>

      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-500">Name</label>
            <p className="text-lg font-medium">{userData.name}</p>
          </div>
          <div>
            <label className="text-sm text-gray-500">Email</label>
            <p className="text-lg font-medium">{userData.email}</p>
          </div>
          <div>
            <label className="text-sm text-gray-500">Gender</label>
            <p className="text-lg font-medium capitalize">{userData.gender}</p>
          </div>
          <div>
            <label className="text-sm text-gray-500">Date of Birth</label>
            <p className="text-lg font-medium">
              {new Date(userData.dateOfBirth).toLocaleDateString()}
            </p>
          </div>
          <div>
            <label className="text-sm text-gray-500">Aadhaar ID</label>
            <p className="text-lg font-medium">
              {userData.aadhaarId.replace(/(\d{4})/g, '$1 ').trim()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}