import { Column } from "@/components/shared/DataTableWithTitle";

// interface for fasyankes model
export interface FasyankesModel {
    _id: string;
    code: string;
    name: string;
    type: FasyankesType;
    permitNumber: string;
    address: string;
    facilityPICName: string;
    facilityPICEmail: string;
    createdDate: string;
    updatedDate: string;
    province: string;
}

// enum for fasyankes type
export enum FasyankesType {
    RUMAHSAKIT = "RUMAH SAKIT",
    PUSKESMAS = "PUSKESMAS",
    KLINIK = "KLINIK",
    PRAKTIKDOKTER = "PRAKTIK DOKTER",
    APOTEK = "APOTEK",
    LABORATORIUM = "LABORATORIUM",
}

// table model for fasyankes
export const fasyankesColumns: Column[] = [
    {
        header: "No",
        accessorKey: "no",
        cell: ({ row, table }) => {
          const page = table.options.meta?.page ?? 1;
          const pageSize = table.options.meta?.pageSize ?? 10;
          return (page - 1) * pageSize + row.index + 1;
        },
    },
    { header: 'Fasyankes', accessorKey: 'name' },
    { header: 'Penanggung Jawab', accessorKey: 'facilityPICName' },
    { header: 'Email PJ', accessorKey: 'facilityPICEmail' },
    { header: 'Jenis Fasyankes', accessorKey: 'type' },
    { header: 'Provinsi', accessorKey: 'province' },
    { header: 'Tanggal dibuat', accessorKey: 'createdDate' },
    { header: 'Tanggal diperbarui', accessorKey: 'updatedDate' },
    {
      header: '',
      accessorKey: 'actions',
      cell: () => <div className="text-xl text-slate-400 font-bold text-center cursor-pointer">...</div>,
    },  
];

// export enum for all provinces in Indonesia
export enum Province {
    ACEH = "Aceh",
    BALI = "Bali",
    BANTEN = "Banten",
    BENGKULU = "Bengkulu",
    DI_YOGYAKARTA = "DI Yogyakarta",
    DKI_JAKARTA = "DKI Jakarta",
    GORONTALO = "Gorontalo",
    JAMBI = "Jambi",
    JAWA_BARAT = "Jawa Barat",
    JAWA_TENGAH = "Jawa Tengah",
    JAWA_TIMUR = "Jawa Timur",
    KALIMANTAN_BARAT = "Kalimantan Barat",
    KALIMANTAN_SELATAN = "Kalimantan Selatan",
    KALIMANTAN_TENGAH = "Kalimantan Tengah",
    KALIMANTAN_TIMUR = "Kalimantan Timur",
    KALIMANTAN_UTARA = "Kalimantan Utara",
    KEPULAUAN_BANGKA_BELITUNG = "Kepulauan Bangka Belitung",
    KEPULAUAN_RIAU = "Kepulauan Riau",
    LAMPUNG = "Lampung",
    MALUKU = "Maluku",
    MALUKU_UTARA = "Maluku Utara",
    NUSA_TENGGARA_BARAT = "Nusa Tenggara Barat",
    NUSA_TENGGARA_TIMUR = "Nusa Tenggara Timur",
    PAPUA = "Papua",
    PAPUA_BARAT = "Papua Barat",
    PAPUA_BARAT_DAYA = "Papua Barat Daya",
    PAPUA_PEGUNUNGAN = "Papua Pegunungan",
    PAPUA_SELATAN = "Papua Selatan",
    PAPUA_TENGAH = "Papua Tengah",
    RIAU = "Riau",
    SULAWESI_BARAT = "Sulawesi Barat",
    SULAWESI_SELATAN = "Sulawesi Selatan",
    SULAWESI_TENGAH = "Sulawesi Tengah",
    SULAWESI_TENGGARA = "Sulawesi Tenggara",
    SULAWESI_UTARA = "Sulawesi Utara",
    SUMATERA_BARAT = "Sumatera Barat",
    SUMATERA_SELATAN = "Sumatera Selatan",
    SUMATERA_UTARA = "Sumatera Utara",
}