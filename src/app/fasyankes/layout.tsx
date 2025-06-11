import React from 'react';
import { ToastProvider } from '@/components/shared/ToastContext';
import DashboardWrapper from '@/components/shared/DashboardWrapper';

export default function FasyankesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToastProvider>
      <DashboardWrapper>
        {children}
      </DashboardWrapper>
    </ToastProvider>
  );
} 