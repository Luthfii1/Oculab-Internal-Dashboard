'use client';

import React from 'react';

const DashboardPage = () => {
  return (
    <div className="p-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-900">Welcome to Dashboard</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample Cards */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
            <h3 className="text-lg font-semibold mb-2 text-slate-900">Total Users</h3>
            <p className="text-3xl font-bold text-purple-600">1,234</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
            <h3 className="text-lg font-semibold mb-2 text-slate-900">Active Projects</h3>
            <p className="text-3xl font-bold text-blue-600">42</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
            <h3 className="text-lg font-semibold mb-2 text-slate-900">Revenue</h3>
            <p className="text-3xl font-bold text-green-600">$12,345</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-slate-100">
              <div>
                <p className="font-medium text-slate-800">New user registration</p>
                <p className="text-sm text-slate-500">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-slate-100">
              <div>
                <p className="font-medium text-slate-800">Project update</p>
                <p className="text-sm text-slate-500">1 hour ago</p>
              </div>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium text-slate-800">New comment</p>
                <p className="text-sm text-slate-500">3 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage; 