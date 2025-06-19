'use client';

import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { AnalyticsDetailModel, AnalyticsType, getAnalyticsStatusDisplay } from '@/schemas/analytics/model';
import Image from 'next/image';

export default function AnalyticsDetail({ analyticsDetailData }: { analyticsDetailData: AnalyticsDetailModel }) {
  return (
    <div className="w-full mt-8 mx-auto p-0">
      {/* Header */}
      <div className="flex items-center mb-6">
        <Link href="/analytics" className="flex items-center text-slate-600 hover:text-purple-600 text-sm font-medium mr-6">
          <ChevronLeft className="w-5 h-5 mr-1" />
          Kembali
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <span className="text-slate-400 font-medium">Status Pemeriksaan</span>
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
            analyticsDetailData.examinationStatus === AnalyticsType.NOTSTARTED ? 'bg-slate-100 text-slate-700' :
            analyticsDetailData.examinationStatus === AnalyticsType.NEEDVALIDATION ? 'bg-orange-100 text-orange-700' :
            analyticsDetailData.examinationStatus === AnalyticsType.INPROGRESS ? 'bg-purple-100 text-purple-700' :
            analyticsDetailData.examinationStatus === AnalyticsType.FINISHED ? 'bg-green-100 text-green-700' :
            'bg-slate-100 text-slate-700'
          }`}>
            {getAnalyticsStatusDisplay(analyticsDetailData.examinationStatus)}
          </span>
        </div>
      </div>

      {/* Top summary */}
      {/* Group 1: Main Info */}
      <div className="flex gap-8 mb-4">
        {/* Informasi Detail Pemeriksaan */}
        <div className="flex flex-col gap-2 min-w-[220px]">
          <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
            <Image src="/images/book.svg" alt="icon" width={24} height={24} />
            Informasi Detail Pemeriksaan
          </div>
          <div className="text-2xl font-bold text-purple-700 tracking-wide">{analyticsDetailData.examinationId}</div>
        </div>
        {/* Waktu Analisis */}
        <div className="flex flex-col gap-2 min-w-[180px]">
          <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
            <Image src="/icons/time-color-icon.svg" alt="icon" width={24} height={24} />
            Waktu Analisis
          </div>
          <div className="text-2xl font-bold text-purple-700 tracking-wide">{analyticsDetailData.totalDuration}</div>
        </div>
        {/* Nama Fasyankes */}
        <div className="flex flex-col gap-2 min-w-[260px]">
          <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
            <Image src="/images/hospital.svg" alt="icon" width={24} height={24} />
            Nama Fasyankes
          </div>
          <div className="text-2xl font-bold text-purple-700 tracking-wide">{analyticsDetailData.healthFacilityName}</div>
        </div>
      </div>

      {/* Group 2: Provinsi & Tanggal dibuat */}
      <div className="flex gap-8 mb-6">
        {/* Provinsi */}
        <div className="flex flex-col items-start gap-2 text-slate-500 text-sm">
          <span className="font-medium">Provinsi</span>
          <span className="text-slate-900 font-semibold">{analyticsDetailData.healthFacilityProvince}</span>
        </div>
        {/* Tanggal dibuat */}
        <div className="flex flex-col items-start gap-2 text-slate-500 text-sm">
          <span className="font-medium">Tanggal dibuat</span>
          <span className="text-slate-900 font-semibold">{analyticsDetailData.examinationDate}</span>
        </div>
      </div>

      {/* Main content cards */}
      <div className="grid grid-cols-4 gap-6">
        {/* Hasil Interpretasi - wider */}
        <div className="col-span-2 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2">
            <Image src="/images/checklist.svg" alt="icon" width={20} height={20} />
            <span className="font-semibold text-slate-800">Hasil Interpretasi</span>
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium mb-1">Interpretasi Petugas</div>
            <div className="border border-blue-200 rounded-lg p-3 mb-2">
              <span className="text-blue-600 font-bold text-lg">{analyticsDetailData.finalResultInterpretation}</span>
              <div className="text-slate-700 text-sm mt-1">{analyticsDetailData.finalResultDescription}</div>
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium mb-1">Interpretasi Sistem</div>
            <div className="flex items-center gap-2 text-orange-600 text-xs mb-1">
              <Image src="/images/warning.svg" alt="icon" width={14} height={14} />
              Interpretasi sistem bukan merupakan hasil akhir untuk pasien
            </div>
            <div className="border border-red-200 rounded-lg p-3">
              <span className="text-red-500 font-bold text-lg">{analyticsDetailData.systemResultInterpretation}</span>
              <div className="text-slate-700 text-sm mt-1">{analyticsDetailData.systemResultDescription}</div>
            </div>
          </div>
          <button className="mt-4 w-full flex items-center justify-center gap-2 bg-purple-50 text-purple-700 font-semibold py-2 rounded-lg hover:bg-purple-100 transition">
            <Image src="/images/file.svg" alt="PDF" width={14} height={14} />
            Lihat PDF
          </button>
        </div>

        {/* Petugas Pemeriksaan & Detail Sediaan */}
        <div className="col-span-1 flex flex-col h-full gap-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex-1 flex flex-col">
            <div className="font-semibold text-slate-800 mb-2">Petugas Pemeriksaan</div>
            <div className="text-slate-700 text-sm mb-1">{analyticsDetailData.atlmName}</div>
            <div className="text-slate-500 text-xs mb-2">Ditugaskan oleh</div>
            <div className="text-slate-700 text-sm">{analyticsDetailData.dpjpName}</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex-1 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <Image src="/images/file-magnifier.svg" alt="icon" width={14} height={14} />
              <span className="font-semibold text-slate-800">Detail Sediaan</span>
            </div>
            <div className="text-slate-500 text-xs mb-1">ID Sediaan</div>
            <div className="text-slate-700 text-sm mb-2">{analyticsDetailData.slideId}</div>
            <div className="text-slate-500 text-xs mb-1">Tujuan Pemeriksaan</div>
            <div className="text-slate-700 text-sm mb-2">{analyticsDetailData.goalExamination}</div>
            <div className="text-slate-500 text-xs mb-1">Jenis Sediaan</div>
            <div className="text-slate-700 text-sm">{analyticsDetailData.typeExamination}</div>
          </div>
        </div>

        {/* Data Pasien */}
        <div className="col-span-1 bg-white border border-slate-200 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-2">
            <Image src="/images/person.svg" alt="icon" width={14} height={14} />
            <span className="font-semibold text-purple-700">Data Pasien</span>
          </div>
          <div className="text-slate-500 text-xs mb-1">Nama</div>
          <div className="text-slate-700 text-sm mb-2">{analyticsDetailData.patientName}</div>
          <div className="text-slate-500 text-xs mb-1">NIK</div>
          <div className="text-slate-700 text-sm mb-2">{analyticsDetailData.patientNIK}</div>
          <div className="text-slate-500 text-xs mb-1">Tanggal Lahir</div>
          <div className="text-slate-700 text-sm mb-2">{analyticsDetailData.patientBirthDate}</div>
          <div className="text-slate-500 text-xs mb-1">Jenis Kelamin</div>
          <div className="text-slate-700 text-sm mb-2">{analyticsDetailData.patientGender}</div>
          {analyticsDetailData.patientBPJS && (
            <>
              <div className="text-slate-500 text-xs mb-1">Nomor BPJS</div>
              <div className="text-slate-700 text-sm">{analyticsDetailData.patientBPJS}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}