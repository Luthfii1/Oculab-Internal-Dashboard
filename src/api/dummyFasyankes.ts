// dummy data getFasyankesList generate 20 data with data type FasyankesModel
import { FasyankesType } from "@/schemas/fasyankes";

export async function getFasyankesListDummy() {
    return Array.from({ length: 20 }).map((_, i) => ({
        _id: i + 1,
        code: i + 1,
        name: 'Klinik Sehat Sentosa',
        type: FasyankesType.FASYANKES_KLINIK,
        permitNumber: '1234567890',
        address: 'Jl. Raya No. 123, Jakarta',
        responsiblePerson: 'dr. Rina Kusuma, M.Kes',
        email: 'rinakusuma@kliniksentosa.id',
        createdDate: '27/12/2001',
        updatedDate: 'dd/mm/yyyy',
        province: 'Kalimantan Selatan',
    }));
}

// dummy data getFasyankesDetail with data type FasyankesModel
export async function getFasyankesDetailDummy(id: string) {
    return {
        _id: id,
        code: '1234567890',
        name: 'Klinik Sehat Sentosa',
        type: FasyankesType.FASYANKES_RS_KELAS_1,
        permitNumber: '1234567890',
        address: 'Jl. Raya No. 123, Jakarta',
        responsiblePerson: 'Dr. Rina Kusuma, M.Kes',
        email: 'rinakusuma@kliniksentosa.id',
        createdDate: '27/12/2001',
        updatedDate: 'dd/mm/yyyy',
        province: 'Kalimantan Selatan',
    }
}