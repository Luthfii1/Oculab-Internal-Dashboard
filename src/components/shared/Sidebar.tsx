'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

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
    },
    {
      name: 'Analytics',
      icon: '/icons/time-monitoring.svg',
      path: '/analytics'
    }
  ];

  return (
    <aside className={`fixed left-0 top-0 h-full bg-white border-r-2 border-slate-200 transition-all duration-300 z-30 w-20`}>
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
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar; 