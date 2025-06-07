'use client';

import React from 'react';

const AccountsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Accounts Management</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Account Stats Cards */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-700 mb-2">Total Accounts</h3>
          <p className="text-3xl font-bold text-purple-600">1,234</p>
          <p className="text-sm text-slate-500 mt-2">+12% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-700 mb-2">Active Accounts</h3>
          <p className="text-3xl font-bold text-green-600">987</p>
          <p className="text-sm text-slate-500 mt-2">80% of total accounts</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-700 mb-2">Inactive Accounts</h3>
          <p className="text-3xl font-bold text-red-600">247</p>
          <p className="text-sm text-slate-500 mt-2">20% of total accounts</p>
        </div>
      </div>

      {/* Recent Accounts Table */}
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-slate-200">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Accounts</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 text-slate-600 font-medium">Account ID</th>
                  <th className="text-left py-3 px-4 text-slate-600 font-medium">Name</th>
                  <th className="text-left py-3 px-4 text-slate-600 font-medium">Status</th>
                  <th className="text-left py-3 px-4 text-slate-600 font-medium">Created Date</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((item) => (
                  <tr key={item} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-3 px-4">ACC-{item.toString().padStart(4, '0')}</td>
                    <td className="py-3 px-4">Account {item}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item % 2 === 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {item % 2 === 0 ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="py-3 px-4">2024-03-{item.toString().padStart(2, '0')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountsPage; 