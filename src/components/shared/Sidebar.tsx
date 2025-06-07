import React from 'react';

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[280px] bg-white border-r border-gray-200">
      <div className="p-4">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        {/* Add navigation items here */}
      </div>
    </aside>
  );
};

export default Sidebar; 