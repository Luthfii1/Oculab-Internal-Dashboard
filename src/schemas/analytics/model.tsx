import { ColumnDef, CellContext } from "@tanstack/react-table";
import { PaginationMeta, Province } from "../fasyankes/model";

// interface for analytics model
export interface AnalyticsListModel {
    _id: string;
    analysisId: string;
    fasyankesName: string;
    status: AnalyticsType;
    analysisTime: string;
    analysisDate: string;
    province: Province;
}

// enum for analytics type
export enum AnalyticsType {
    PEMERIKSAAN = "Sedang Berlangsung",
    BELUM_DIMULAI = "Belum Dimulai",
    SELESAI = "Selesai",
    MENUNGGU_KONFIRMASI = "Menunggu Konfirmasi"
}

// table model for analytics
export const analyticsColumns: ColumnDef<AnalyticsListModel>[] = [
    {
        header: "No",
        accessorKey: "no",
        cell: (cell: CellContext<AnalyticsListModel, unknown>) => {
          const meta = cell.table.options.meta as PaginationMeta | undefined;
          const page = meta?.page ?? 1;
          const pageSize = meta?.pageSize ?? 10;
          return (page - 1) * pageSize + cell.row.index + 1;
        },
    },
    { header: 'ID Pemeriksaan', accessorKey: 'analysisId' },
    { header: 'Nama Fasyankes', accessorKey: 'fasyankesName' },
    { header: 'Status Pemeriksaan', accessorKey: 'status' },
    { header: 'Waktu Analisis', accessorKey: 'analysisTime' },
    { header: 'Provinsi', accessorKey: 'province' },
    { header: 'Tanggal Dibuat', accessorKey: 'analysisDate' },
];