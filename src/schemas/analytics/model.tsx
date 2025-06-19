import { ColumnDef, CellContext } from "@tanstack/react-table";
import { PaginationMeta, Province } from "../fasyankes/model";

// interface for analytics model
export interface AnalyticsListModel {
    examinationId: string;
    slideId: string;
    healthFacilityName: string;
    examinationStatus: AnalyticsType;
    totalDuration: string;
    examinationDate: string;
    healthFacilityProvince: Province;
}

// interface for analytics detail model
export interface AnalyticsDetailModel {
    examinationId: string;
    slideId: string;
    healthFacilityName: string;
    examinationStatus: AnalyticsType;
    totalDuration: string;
    examinationDate: string;
    healthFacilityProvince: Province;
    finalResultInterpretation: string;
    finalResultDescription: string;
    systemResultInterpretation: string;
    systemResultDescription: string;
    dpjpName: string;
    atlmName: string;
    goalExamination: string;
    typeExamination: string;
    patientName: string;
    patientNIK: string;
    patientBirthDate: string;
    patientGender: string;
    patientBPJS?: string;
}

// enum for analytics type
export enum AnalyticsType {
    NOTSTARTED = "NOTSTARTED",
    NEEDVALIDATION = "NEEDVALIDATION",
    INPROGRESS = "INPROGRESS",
    FINISHED = "FINISHED"
}

// Helper function to get display text for analytics status
export function getAnalyticsStatusDisplay(status: AnalyticsType): string {
    switch (status) {
        case AnalyticsType.NOTSTARTED:
            return "Belum Dimulai";
        case AnalyticsType.NEEDVALIDATION:
            return "Menunggu Konfirmasi";
        case AnalyticsType.INPROGRESS:
            return "Sedang Dianalisa Sistem";
        case AnalyticsType.FINISHED:
            return "Selesai";
        default:
            return "Unknown";
    }
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
    { header: 'ID Pemeriksaan', accessorKey: 'slideId' },
    { header: 'Nama Fasyankes', accessorKey: 'healthFacilityName' },
    { 
        header: 'Status Pemeriksaan', 
        accessorKey: 'examinationStatus',
        cell: (cell: CellContext<AnalyticsListModel, unknown>) => {
            return getAnalyticsStatusDisplay(cell.getValue() as AnalyticsType);
        }
    },
    { header: 'Waktu Analisis', accessorKey: 'totalDuration' },
    { header: 'Provinsi', accessorKey: 'healthFacilityProvince' },
    { header: 'Tanggal Dibuat', accessorKey: 'examinationDate' },
];