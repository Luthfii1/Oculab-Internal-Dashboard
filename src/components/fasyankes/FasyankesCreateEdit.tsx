'use client';
import { ChevronLeft, FilePenLine, UserCheck, UserPlus } from 'lucide-react';
import { FasyankesForm, FasyankesFormSchema } from './FasyankesForm';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function FasyankesCreateEdit({ fasyankesData }: { fasyankesData?: Partial<FasyankesFormSchema> }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (fasyankesData && fasyankesData.id) {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
  }, [fasyankesData]);

  const handleSubmit = (values: FasyankesFormSchema) => {
    console.log(values);
  };

  return (
    <div className="w-full mt-8 mx-auto p-0">
      {/* Back link */}
      <Link
        href={isEdit? `/fasyankes/${fasyankesData?.id}` : '/fasyankes'}
        className="flex items-center text-slate-600 hover:text-purple-600 mb-6 text-sm font-medium"
      >
        <ChevronLeft className="w-5 h-5 mr-1" />
        Kembali
      </Link>

      {/* Title */}
      <div className="flex items-center gap-2 mb-8">
        {isEdit ? <FilePenLine className="w-6 h-6 text-purple-500" /> : <UserPlus className="w-6 h-6 text-purple-500" />}  
        <h1 className="text-xl font-bold text-slate-900">{isEdit ? `Ubah Informasi Fasyankes '${fasyankesData?.nama}'` : 'Tambahkan Akun Baru Fasyankes'}</h1>
      </div>

      <FasyankesForm
        defaultValues={fasyankesData}
        onSubmit={handleSubmit}
        submitText={isEdit ? 'Simpan' : 'Buat Akun'}
        confirmationPopupProps={{
          imageAddress: isEdit ? '/images/confirmation-edit-fasyankes.svg' : '/images/confirmation-create-fasyankes.svg',
          imageBackground: 'bg-gradient-to-r from-purple-200 to-purple-500',
          title: isEdit ? 'Simpan Perubahan?' : 'Buat Akun?',
          message: 'Pastikan data yang Anda masukkan sudah benar',
          confirmationText: isEdit ? 'Simpan' : 'Buat Akun',
          confirmationIcon: <UserCheck className="w-4 h-4 text-white" />,
          confirmationBackgroundColor: 'bg-purple-500',
          onConfirm: () => {
            if (isEdit) {
              console.log('Simpan');
            } else {
              console.log('Buat Akun');
            }
          },
        }}
        onCancel={() => {
          console.log('Batal');
        }}
      />
    </div>
  );
}