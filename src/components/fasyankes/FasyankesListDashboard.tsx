'use client';
import Link from "next/link";
import DataTableWithTitle from "../shared/DataTableWithTitle";
import Image from "next/image";
import { getFasyankesList } from "@/api/FasyankesApis";
import { useEffect, useState } from "react";
import { FasyankesModel } from "@/schemas/fasyankes";
import { fasyankesColumns } from "@/schemas/fasyankes";

export default function FasyankesListDashboard() {
  const [data, setData] = useState<FasyankesModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [numberOfFasyankes, setNumberOfFasyankes] = useState(0);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getFasyankesList();
      setData(data as FasyankesModel[]);
      setNumberOfFasyankes(data.length);
      setIsLoading(false);
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
          <div className="text-base font-semibold text-slate-800">Anda telah mendaftarkan {numberOfFasyankes} Fasyankes</div>
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
      icon={<Image src="/icons/list-fasyanken-icon.svg" alt="List Fasyanken Icon" width={40} height={40} />}
      columns={fasyankesColumns}
      data={data}
      isLoading={isLoading}
    />
  </div>
  );
}