'use client';

import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b-3 border-slate-200 z-10">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/logos/oculab-sales-team-logo.png"
            alt="Oculab Sales Team Logo"
            width={150}
            height={72}
            className="object-contain"
          />
        </div>
        
        <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-purple-100">
            <Image
              src="/dummies/default-avatar.png"
              alt="User Avatar"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-slate-900">Dyah Laksmi</p>
            <p className="text-xs text-slate-500">Super Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 