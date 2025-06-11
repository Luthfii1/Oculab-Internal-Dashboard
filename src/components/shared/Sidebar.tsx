'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  // Load the initial state from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem('sidebarCollapsed');
    if (savedState !== null) {
      setIsCollapsed(JSON.parse(savedState));
    }
    setIsLoading(false);
  }, []);

  // // Save state to localStorage when it changes
  // const handleCollapse = (collapsed: boolean) => {
  //   setIsCollapsed(collapsed);
  //   localStorage.setItem('sidebarCollapsed', JSON.stringify(collapsed));
  // };

  const navItems = [
    {
      name: 'Dashboard',
      icon: '/icons/home-icon.svg',
      path: '/dashboard'
    },
    {
      name: 'Fasyankes',
      icon: '/icons/account-icon.svg',
      path: '/fasyankes'
    }
  ];

  if (isLoading) {
    return null; // or a loading skeleton if preferred
  }

  return (
    <aside className={`fixed left-0 top-0 h-full bg-white border-r-2 border-slate-200 transition-all duration-300 z-30 ${isCollapsed ? 'w-20' : 'w-[200px]'}`}>
      {/* Collapse/expand button: center Y, half outside the sidebar border */}
      {/* <button
        onClick={() => handleCollapse(!isCollapsed)}
        className="absolute top-1/2 -translate-y-1/2 right-[-18px] w-8 h-12 bg-white border-2 border-slate-200 rounded-lg flex items-center justify-center z-50 shadow"
        style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)' }}
      >
        <Image
          src="/icons/chevron-left.svg"
          alt="Toggle Sidebar"
          width={16}
          height={16}
          className={`transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}
        />
      </button> */}
      <div className="p-4 mt-16 flex-1">
        <nav className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? 'bg-purple-500 text-white'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={24}
                  height={24}
                  className={isActive ? 'brightness-0 invert' : ''}
                />
                {!isCollapsed && (
                  <span className="font-semibold">{item.name}</span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar; 