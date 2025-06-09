import { Column } from "@/components/shared/DataTableWithTitle";

export const fasyankesColumns: Column[] = [
    {
        header: 'No',
        accessorKey: 'no',
        cell: (row) => row.index + 1,
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