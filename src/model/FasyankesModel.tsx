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