// dummy data getFasyankesList generate 20 data with data type FasyankesModel
import { FasyankesModel, FasyankesType } from "@/schemas/fasyankes";
import { ApiResponse } from "@/lib/apiUtils";

export async function getFasyankesListDummy(): Promise<ApiResponse<FasyankesModel[]>> {
    const defaultData = Array.from({ length: 19 }).map((_, i) => ({
        _id: i + 1,
        code: i + 1,
        name: 'Klinik Sehat Sentosa',
        type: FasyankesType.KLINIK,
        permitNumber: '1234567890',
        address: 'Jl. Raya No. 123, Jakarta',
        facilityPICName: 'Dr. Rina Kusuma, M.Kes',
        facilityPICEmail: 'rinakusuma@kliniksentosa.id',
        createdDate: '27/12/2001',
        updatedDate: '30/06/2025',
        province: 'Kalimantan Selatan',
    }));

    // Add one different data for search testing
    const searchTestData = {
        _id: 20,
        code: 'RS-001',
        name: 'Rumah Sakit Medika Sejahtera',
        type: FasyankesType.RUMAHSAKIT,
        permitNumber: 'RS-2024-001',
        address: 'Jl. Medika No. 45, Surabaya',
        facilityPICName: 'dr. Budi Santoso, Sp.PD',
        facilityPICEmail: 'budi.santoso@medikasejahtera.id',
        createdDate: '01/01/2024',
        updatedDate: '15/03/2024',
        province: 'Jawa Timur',
    };

    return {
        status: 'success',
        code: 200,
        message: 'Data fetched successfully',
        data: [...defaultData, searchTestData] as unknown as FasyankesModel[],
    };
}

// dummy data getFasyankesDetail with data type FasyankesModel
export async function getFasyankesDetailDummy(id: string): Promise<ApiResponse<FasyankesModel>> {
    return {
        status: 'success',
        code: 200,
        message: 'Data fetched successfully',
        data: {
            _id: id,
            code: '1234567890',
            name: 'Klinik Sehat Sentosa',
            type: FasyankesType.KLINIK,
            permitNumber: '1234567890',
            address: 'Jl. Raya No. 123, Jakarta',
            facilityPICName: 'Dr. Rina Kusuma, M.Kes',
            facilityPICEmail: 'rinakusuma@kliniksentosa.id',
            createdDate: '27/12/2001',
            updatedDate: '30/06/2025',
            province: 'Kalimantan Selatan',
        }
    }
}