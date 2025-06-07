'use client';
import React from 'react';
import Link from 'next/link';
import { ChevronLeft, UserPlus, UserCheck } from 'lucide-react';
import { useToast } from '@/components/shared/ToastContext';
import { FasyankesForm, FasyankesFormSchema } from '@/components/fasyankes/FasyankesForm';

const NewFasyankesPage = () => {
  const { showToast } = useToast();

  const handleSubmit = async (values: FasyankesFormSchema) => {
    try {
      const response = await fetch('/api/fasyankes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to create fasyankes');
      }

      showToast('Success', 'Fasyankes berhasil ditambahkan', 'success');
      // TODO: redirect to fasyankes page
    //   router.push('/fasyankes');
    } catch (error) {
      console.error('Error creating fasyankes:', error);
      showToast('Error', 'Fasyankes gagal ditambahkan', 'error');
    }
  };

  return (
    <div className="w-full mt-8 mx-auto p-0">
      {/* Back link */}
      <Link href="/fasyankes" className="flex items-center text-slate-600 hover:text-purple-600 mb-6 text-sm font-medium">
        <ChevronLeft className="w-5 h-5 mr-1" />
        Kembali
      </Link>

      {/* Title */}
      <div className="flex items-center gap-2 mb-8">
        <UserPlus className="w-6 h-6 text-purple-500" />
        <h1 className="text-xl font-bold text-slate-900">Tambahkan Akun Baru Fasyankes</h1>
      </div>

      <FasyankesForm
        onSubmit={handleSubmit}
        submitText="Buat Akun"
        confirmationPopupProps={{
          imageAddress: '/images/confirmation-create-fasyankes.svg',
          imageBackground: 'bg-gradient-to-r from-purple-200 to-purple-500',
          title: 'Buat Akun Baru?',
          message: 'Pastikan data yang Anda masukkan sudah benar',
          confirmationText: 'Buat Akun',
          confirmationIcon: <UserCheck className="w-4 h-4 text-white" />,
          confirmationBackgroundColor: 'bg-purple-500',
          onConfirm: () => {
            console.log('Buat Akun');
          },
        }}
        onCancel={() => {
          console.log('Batal');
        }}
      />
    </div>
  );
};

export default NewFasyankesPage; 