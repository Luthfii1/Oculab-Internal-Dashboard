'use client';

import React from 'react';

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-[280px] bg-white border-r border-slate-100">
      <div className="p-4">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        {/* Add navigation items here */}
      </div>
    </aside>
  );
};

export default Sidebar; 