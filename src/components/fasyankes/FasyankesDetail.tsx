'use client';

import { ConfirmationPopup } from '@/components/shared/ConfirmationPopup';
import { ChevronLeft, Hospital, Trash2, FilePenLine } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { FasyankesModel } from '@/schemas/fasyankes';

export default function FasyankesDetail({ fasyankesData }: { fasyankesData: FasyankesModel }) {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="W-full mt-8 mx-auto p-0">
      {/* Header */}
      <div className="flex items-center mb-8">
        <Link href="/fasyankes" className="flex items-center text-slate-600 hover:text-purple-600 text-sm font-medium mr-6">
          <ChevronLeft className="w-5 h-5 mr-1" />
          Kembali
        </Link>
      </div>
      {/* Title & Actions */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="text-sm text-slate-400 font-semibold mb-1">Informasi Detail Fasyankes</div>
          <div className="flex items-center gap-2 mb-2">
            <Hospital className="w-6 h-6 text-purple-400" />
            <h2 className="text-2xl font-bold text-slate-900">{fasyankesData.name}</h2>
          </div>
        </div>
        <div className="flex gap-6">
            {/* if pressed call confirmation popup */}
          <button className="flex items-center gap-1 text-pink-600 font-semibold text-sm hover:cursor-pointer" onClick={() => setShowConfirm(true)}>
            <Trash2 className="w-5 h-5" />
            Hapus Akun Fasyankes
          </button>
          <Link href={`/fasyankes/${fasyankesData._id}/edit`} className="flex items-center gap-1 text-slate-700 font-semibold text-sm hover:cursor-pointer">
            <FilePenLine className="w-5 h-5" />
            Edit Detail
          </Link>
        </div>
      </div>
      {/* Detail Content */}
      <div className="space-y-6">
        <div>
          <div className="text-sm text-slate-400 font-semibold">Kode Fasyankes</div>
          <div className="text-base font-semibold text-slate-900">{fasyankesData.code}</div>
        </div>
        <div>
          <div className="text-sm text-slate-400 font-semibold">Jenis Fasyankes</div>
          <div className="text-base font-semibold text-slate-900">{fasyankesData.type}</div>
        </div>
        <div>
          <div className="text-sm text-slate-400 font-semibold">Nomor SIP/STR/Izin Klinik</div>
          <div className="text-base font-semibold text-slate-900">{fasyankesData.permitNumber}</div>
        </div>
        <div>
          <div className="text-sm text-slate-400 font-semibold">Alamat</div>
          <div className="text-base font-semibold text-slate-900">{fasyankesData.address}</div>
        </div>
        <div>
          <div className="text-sm text-slate-400 font-semibold">Nama Penanggung Jawab</div>
          <div className="text-base font-semibold text-slate-900">{fasyankesData.responsiblePerson}</div>
        </div>
        <div>
          <div className="text-sm text-slate-400 font-semibold">Email</div>
          <div className="text-base font-semibold text-slate-900">{fasyankesData.email}</div>
        </div>
      </div>

      {showConfirm && 
      <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/30">
        <ConfirmationPopup
            imageAddress="/images/confirmation-delete-fasyankes.svg"
            imageBackground="bg-gradient-to-r from-red-200 to-red-500"
            confirmationText="Hapus Akun Fasyankes"
            title="Hapus Akun Fasyankes Ini?"
            message={`Mohon konfirmasi apakah Anda yakin ingin menghapus ${fasyankesData.name} dari daftar akun Oculab`}
            confirmationIcon={<Trash2 className="w-4 h-4" />}
            confirmationBackgroundColor="bg-red-500"
            onConfirm={() => {
                console.log('Hapus Akun Fasyankes');
                setShowConfirm(false);
            }}
            onCancel={() => setShowConfirm(false)}
        />
      </div>
      }
    </div>
  );
}