import { ColumnDef, CellContext } from "@tanstack/react-table";
import { HealthFacilityType } from "../enum/HealthFacilityType";
import { ProvinceType } from "../enum/ProvinceType";

// interface for fasyankes model
export interface FasyankesModel {
    _id: string;
    code: string;
    name: string;
    type: HealthFacilityType;
    permitNumber: string;
    address: string;
    facilityPICName: string;
    facilityPICEmail: string;
    createdDate: string;
    updatedDate: string;
    province: ProvinceType;
}

// meta type for pagination
export type PaginationMeta = {
  page: number;
  pageSize: number;
};

// table model for fasyankes
export const fasyankesColumns: ColumnDef<FasyankesModel>[] = [
    {
        header: "No",
        accessorKey: "no",
        cell: (cell: CellContext<FasyankesModel, unknown>) => {
          const meta = cell.table.options.meta as PaginationMeta | undefined;
          const page = meta?.page ?? 1;
          const pageSize = meta?.pageSize ?? 10;
          return (page - 1) * pageSize + cell.row.index + 1;
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