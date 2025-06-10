'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

// make an enum for toast type
export enum ToastType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
}

interface ToastContextType {
  showToast: (title: string, message: string, type: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<{
    title: string;
    message: string;
    type: ToastType;
  } | null>(null);

  const showToast = useCallback((title: string, message: string, type: ToastType) => {
    setToast({ title, message, type });
  }, []);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <div className="fixed top-6 right-6 z-[9999]">
          <div
            className={`flex items-center gap-3 px-6 py-3 rounded-xl border shadow ${
              toast.type === 'success'
                ? 'border-green-200'
                : toast.type === 'error'
                ? 'border-red-200'
                : 'border-blue-200'
            }`}
            style={{
              background:
                toast.type === 'success'
                  ? 'linear-gradient(90deg, #DCFCE7 0%, #FFFFFF 100%)'
                  : toast.type === 'error'
                  ? 'linear-gradient(90deg, #FEE2E2 0%, #FFFFFF 100%)'
                  : 'linear-gradient(90deg, #E6F0FA 0%, #FFFFFF 100%)',
            }}
          >
            <div className="flex-shrink-0 h-full flex items-center">
              {toast.type === 'success' ? (
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2l4-4"/>
                </svg>
              ) : toast.type === 'error' ? (
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 9l-6 6m0-6l6 6"/>
                </svg>
              ) : (
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01"/>
                </svg>
              )}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 leading-tight">{toast.title}</span>
              <span className="text-slate-900 text-sm mt-0.5">{toast.message}</span>
            </div>
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
} 