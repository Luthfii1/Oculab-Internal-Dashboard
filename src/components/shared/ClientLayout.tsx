'use client';

import React, { useState, useEffect } from 'react';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
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

  // Sidebar width: 200px expanded, 80px collapsed
  const mainMarginClass = isCollapsed ? 'ml-20' : 'ml-[200px]';

  return (
    <div className={mainMarginClass}>
      {children}
    </div>
  );
} 