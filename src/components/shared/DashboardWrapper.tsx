'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface DashboardWrapperProps {
  children: React.ReactNode;
}

export default function DashboardWrapper({ children }: DashboardWrapperProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedState = localStorage.getItem('sidebarCollapsed');
    if (savedState !== null) {
      setIsCollapsed(JSON.parse(savedState));
    }
    setIsLoading(false);
  }, []);

  if (isLoading) return null;

  const mainMarginClass = isCollapsed ? 'ml-20' : 'ml-[200px]';

  return (
    <div className="min-h-screen bg-slate-0">
      <Sidebar />
      <Header />
      <div className={`${mainMarginClass} pt-8 flex flex-col min-h-screen`}>
        <main className="flex-1 px-8 py-4 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
} 