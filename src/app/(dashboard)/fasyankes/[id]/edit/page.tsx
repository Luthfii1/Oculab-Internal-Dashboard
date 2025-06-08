'use client';
import React from 'react';
import Link from 'next/link';
import { ChevronLeft, UserPlus, UserCheck, FilePenLine } from 'lucide-react';
import { useToast } from '@/components/shared/ToastContext';
import { FasyankesForm, FasyankesFormSchema } from '@/components/fasyankes/FasyankesForm';

async function getFasyankesDetail(id: string) {
    // dummy data
    return {
        id: id,
        nama: 'Klinik Sehat Sentosa',
        kode: '1234567890',
        jenis: 'Klinik Pratama',
        izin: '1234567890',
        alamat: 'Jl. Raya No. 123, Jakarta',
        penanggungJawab: 'Dr. John Doe',
        email: 'john.doe@example.com',
        created: '2021-01-01',
        updated: '2021-01-01',
    }
    // TODO: get data from api
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/fasyankes/${id}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Data not found');
  return res.json();
}

const EditFasyankes = async ({ params }: { params: { id: string } }) => {
  const data = await getFasyankesDetail(params.id);

  const handleSubmit = async (values: FasyankesFormSchema) => {
    console.log(values);
  }

  return (
    <div className="w-full mt-8 mx-auto p-0">
      {/* Back link */}
      <Link href={`/fasyankes/${data.id}`} className="flex items-center text-slate-600 hover:text-purple-600 mb-6 text-sm font-medium">
        <ChevronLeft className="w-5 h-5 mr-1" />
        Kembali
      </Link>

      {/* Title */}
      <div className="flex items-center gap-2 mb-8">
        <FilePenLine className="w-6 h-6 text-purple-500" />
        <h1 className="text-xl font-bold text-slate-900">Ubah Informasi Fasyankes {data.nama}</h1>
      </div>

      <FasyankesForm
        defaultValues={data}
        onSubmit={handleSubmit}
        submitText="Simpan"
        confirmationPopupProps={{
          imageAddress: '/images/confirmation-create-fasyankes.svg',
          imageBackground: 'bg-gradient-to-r from-purple-200 to-purple-500',
          title: 'Simpan Perubahan?',
          message: 'Pastikan data yang Anda masukkan sudah benar',
          confirmationText: 'Simpan',
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

export default EditFasyankes; 