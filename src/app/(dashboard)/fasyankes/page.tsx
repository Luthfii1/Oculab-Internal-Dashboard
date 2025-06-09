'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import DataTableWithTitle, { Column } from '@/components/shared/DataTableWithTitle';
import Link from 'next/link';
import { getFasyankesList } from '@/api/FasyankesApis';

const AccountsPage = () => {
  const [data, setData] = useState([]);
  // --- Dummy Data and Example Usage ---
  const columns: Column[] = [
    { header: 'No', accessorKey: 'no' },
    { header: 'Fasyankes', accessorKey: 'fasyankes' },
    { header: 'Penanggung Jawab', accessorKey: 'pj' },
    { header: 'Email PJ', accessorKey: 'email' },
    { header: 'Jenis Fasyankes', accessorKey: 'jenis' },
    { header: 'Provinsi', accessorKey: 'provinsi' },
    { header: 'Tanggal dibuat', accessorKey: 'created' },
    { header: 'Tanggal diperbarui', accessorKey: 'updated' },
    {
      header: '',
      accessorKey: 'actions',
      cell: () => <div className="text-xl text-slate-400 font-bold text-center cursor-pointer">...</div>,
    },
  ];
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getFasyankesList();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="W-full mt-8 mx-auto p-0">
    
     {/* title with icon and text */}
      <div className="flex items-center gap-2 min-h-[48px] mb-2">
        <Image src="/icons/account-icon-color.svg" alt="Account Icon" width={32} height={32} className="text-purple-500" />
        <h1 className="text-2xl font-bold mb-0">Manajemen Akun Fasyankes</h1>
      </div>
      
      {/* Information card */}
      <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-8">
        <div className="flex items-center gap-4">
          <Image src="/icons/create-account-icon.svg" alt="Create Account Icon" width={60} height={60} />
          <div>
            <div className="text-base font-semibold text-slate-800">Anda telah mendaftarkan 5 Fasyankes</div>
            <div className="text-sm text-slate-500 mt-1">Buat akun pengguna baru untuk fasyankes pengguna layanan Oculab</div>
          </div>
        </div>
        <Link href="/fasyankes/new" className="bg-purple-500 hover:cursor-pointer hover:bg-purple-600 text-white rounded-xl px-6 py-3 font-semibold text-sm transition-colors duration-200 flex items-center gap-2">
          <Image src="/icons/add-account-button.svg" alt="Add Account Button" width={20} height={20} />
          <span>Tambahkan Fasyankes Baru</span>
        </Link>
      </div>

      {/* Data Table with Title */}
      <DataTableWithTitle
        title="Daftar Fasyankes"
        iconAddress="icons/list-fasyanken-icon.svg"
        columns={columns}
        data={data}
      />
    </div>
  );
};

export default AccountsPage; 