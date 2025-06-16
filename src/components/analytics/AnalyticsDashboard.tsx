'use client';
import Link from "next/link";
import DataTableWithTitle from "../shared/DataTableWithTitle";
import Image from "next/image";
import { getFasyankesList } from "@/api/FasyankesApis";
import { useEffect, useState } from "react";
import { FasyankesModel } from "@/schemas/fasyankes";
import { fasyankesColumns } from "@/schemas/fasyankes";

export default function AnalyticsDashboard() {
//   const [data, setData] = useState<FasyankesModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
//   const [numberOfFasyankes, setNumberOfFasyankes] = useState(0);
  
//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await getFasyankesList();
//       setData(data as FasyankesModel[]);
//       setNumberOfFasyankes(data.length);
//       setIsLoading(false);
//     };
//     fetchData();
//   }, []);
  
  return (
  <div className="W-full mt-8 mx-auto p-0">
  
    {/* title with icon and text */}
    <div className="flex items-center gap-2 min-h-[48px] mb-2">
      <Image src="/icons/time-color-icon.svg" alt="Time Color Icon" width={32} height={32} className="text-purple-500" />
      <h1 className="text-2xl font-bold mb-0">Analysis Monitoring</h1>
    </div>
    
    {/* Group of information cards */}
    <div className="flex justify-between items-stretch gap-4 mb-8">
      {/* Information card 1 */}
      <div className="flex items-center bg-slate-50 border border-slate-200 rounded-2xl px-4 py-2 gap-4 w-full">
        {/* Icon section */}
        <Image src="/icons/analytics-card-icon.svg" alt="Analytics Card Icon" width={60} height={60} />

        {/* Info section */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-sm text-slate-500 font-medium">Total Pemeriksaan</div>
          <div className="flex items-center gap-6">
            {/* Belum dimulai */}
            <div className="flex items-baseline gap-1 items-center">
              <span className="text-blue-500 text-2xl font-bold">2</span>
              <span className="font-semibold text-slate-800 ml-1">belum dimulai</span>
            </div>
            <div className="h-6 border-l border-slate-200 mx-2" />
            {/* Sedang berjalan */}
            <div className="flex items-baseline gap-1 items-center">
              <span className="text-blue-500 text-2xl font-bold">20</span>
              <span className="font-semibold text-slate-800 ml-1">sedang berjalan</span>
            </div>
            <div className="h-6 border-l border-slate-200 mx-2" />
            {/* Selesai */}
            <div className="flex items-baseline gap-1 items-center">
              <span className="text-blue-500 text-2xl font-bold">10</span>
              <span className="font-semibold text-slate-800 ml-1">selesai</span>
            </div>
          </div>
        </div>
      </div>

      {/* Information card 2 */}
      <div className="flex items-center bg-slate-50 border border-slate-200 rounded-2xl p-4 gap-4">
        {/* Icon section */}
        <Image src="/icons/time-card-icon.svg" alt="Time Card Icon" width={60} height={60} />

        {/* Info section */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-sm text-slate-500 font-medium">Rata-rata Waktu Pemeriksaan</div>
          <div className="text-2xl font-bold">00:10:00</div>
        </div>
      </div>
    </div>

    {/* Data Table with Title */}
    {/* <DataTableWithTitle
      title="Daftar Fasyankes"
      icon={<Image src="/icons/list-fasyanken-icon.svg" alt="List Fasyanken Icon" width={40} height={40} />}
      columns={fasyankesColumns}
      data={data}
      isLoading={isLoading}
    /> */}
  </div>
  );
}