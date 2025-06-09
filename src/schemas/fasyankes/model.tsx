import { Column } from "@/components/shared/DataTableWithTitle";

// interface for fasyankes model
export interface FasyankesModel {
    _id: string;
    code: string;
    name: string;
    type: FasyankesType;
    permitNumber: string;
    address: string;
    responsiblePerson: string;
    email: string;
    createdDate: string;
    updatedDate: string;
    province: string;
}

// enum for fasyankes type
export enum FasyankesType {
    FASYANKES_KLINIK = 'Fasyankes Klinik',
    FASYANKES_RS_KELAS_1 = 'Fasyankes RS Kelas 1',
    FASYANKES_RS_KELAS_2 = 'Fasyankes RS Kelas 2',
    FASYANKES_RS_KELAS_3 = 'Fasyankes RS Kelas 3',
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
    { header: 'Penanggung Jawab', accessorKey: 'responsiblePerson' },
    { header: 'Email PJ', accessorKey: 'email' },
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