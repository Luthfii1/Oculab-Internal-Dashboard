import React from 'react';
import Sidebar from '@/components/shared/Sidebar';
import Header from '@/components/shared/Header';
import { ToastProvider } from '@/components/shared/ToastContext';
import ClientLayout from '@/components/shared/ClientLayout';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToastProvider>
      <ClientLayout>
        <div className="min-h-screen bg-slate-0">
          <Sidebar />
          <Header />
          <div className="pt-8 flex flex-col min-h-screen">
            <main className="flex-1 px-8 py-4 overflow-auto">
              {children}
            </main>
          </div>
        </div>
      </ClientLayout>
    </ToastProvider>
  );
} 