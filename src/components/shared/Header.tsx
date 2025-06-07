import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-[280px] right-0 h-16 bg-white border-b border-gray-200">
      <div className="h-full px-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold">Dashboard</h1>
        <div className="flex items-center gap-4">
          {/* Add header actions here */}
        </div>
      </div>
    </header>
  );
};

export default Header; 