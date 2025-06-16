import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface DashboardWrapperProps {
  children: React.ReactNode;
}

export default function DashboardWrapper({ children }: DashboardWrapperProps) {

  return (
    <div className="min-h-screen bg-slate-0">
      <Sidebar />
      <Header />
      <div className={`ml-20 pt-8 flex flex-col min-h-screen`}>
        <main className="flex-1 px-8 py-4 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
} 