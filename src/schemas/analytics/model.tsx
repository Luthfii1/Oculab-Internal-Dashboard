import { ColumnDef, CellContext } from "@tanstack/react-table";
import { PaginationMeta } from "../fasyankes/model";
import { StatusExaminationType } from "../enum/StatusExaminationType";
import { ProvinceType } from "../enum/ProvinceType";

// interface for analytics model
export interface AnalyticsListModel {
    examinationId: string;
    slideId: string;
    healthFacilityName: string;
    examinationStatus: StatusExaminationType;
    totalDuration: string;
    examinationDate: string;
    healthFacilityProvince: ProvinceType;
}

// interface for analytics detail model
export interface AnalyticsDetailModel {
    examinationId: string;
    slideId: string;
    healthFacilityName: string;
    examinationStatus: StatusExaminationType;
    totalDuration: string;
    examinationDate: string;
    healthFacilityProvince: ProvinceType;
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

// Helper function to get display text for analytics status
export function getAnalyticsStatusDisplay(status: StatusExaminationType): string {
    switch (status) {
        case StatusExaminationType.NOTSTARTED:
            return "Belum Dimulai";
        case StatusExaminationType.NEEDVALIDATION:
            return "Menunggu Konfirmasi";
        case StatusExaminationType.INPROGRESS:
            return "Sedang Dianalisa Sistem";
        case StatusExaminationType.FINISHED:
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
            return getAnalyticsStatusDisplay(cell.getValue() as StatusExaminationType);
        }
    },
    { header: 'Waktu Analisis', accessorKey: 'totalDuration' },
    { header: 'Provinsi', accessorKey: 'healthFacilityProvince' },
    { header: 'Tanggal Dibuat', accessorKey: 'examinationDate' },
];