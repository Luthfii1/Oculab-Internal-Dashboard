// dummy data getTimeAnalyticsList generate 20 data with data type AnalyticsListModel
import { AnalyticsDetailModel, AnalyticsListModel, AnalyticsType } from "@/schemas/analytics/model";
import { ApiResponse } from "@/lib/apiUtils";

export async function getTimeAnalyticsListDummy(): Promise<ApiResponse<AnalyticsListModel[]>> {
    const defaultData = Array.from({ length: 19 }).map((_, i) => ({
        _id: i + 1,
        slideId: 'BRN-12345678',
        healthFacilityName: 'Klinik Sehat Sentosa',
        examinationStatus: AnalyticsType.BELUM_DIMULAI,
        totalDuration: '00:10:00',
        examinationDate: '27/12/2001',
        healthFacilityProvince: 'Kalimantan Selatan',
    }));

    // Add one different data for search testing
    const searchTestData = {
        _id: 20,
        slideId: 'BRN-0987654',
        healthFacilityName: 'Rumah Sakit Medika Sejahtera',
        examinationStatus: AnalyticsType.SELESAI,
        totalDuration: '00:10:00',
        examinationDate: '27/12/2001',
        healthFacilityProvince: 'Jawa Timur',
    };

    return {
        status: 'success',
        code: 200,
        message: 'Data fetched successfully',
        data: [...defaultData, searchTestData] as unknown as AnalyticsListModel[],
    };
}

export async function getAnalyticsDetailDummy(): Promise<ApiResponse<AnalyticsDetailModel>> {
    const data = {
        _id: '1',
        slideId: 'BRN-12345678',
        healthFacilityName: 'Klinik Sehat Sentosa',
        examinationStatus: AnalyticsType.SELESAI,
        totalDuration: '00:10:00',
        examinationDate: '27/12/2001',
        healthFacilityProvince: 'Kalimantan Selatan',
        finalResultInterpretation: 'Negatif',
        finalResultDescription: 'Tidak ditemukan BTA dari 100 gambar lapangan pandang',
        systemResultInterpretation: 'Scanty',
        systemResultDescription: 'Ditemukan 9 BTA dari 100 gambar lapangan pandang',
        dpjpName: 'Dr. John Doe',
        atlmName: 'Dr. Jane Doe',
        goalExamination: 'Normal',
        typeExamination: 'Normal',
        patientName: 'John Doe',
        patientNIK: '1234567890',
        patientBirthDate: '27/12/2001',
        patientGender: 'Laki-laki',
        patientBPJS: '1234567890',
    };

    return {
        status: 'success',
        code: 200,
        message: 'Data fetched successfully',
        data: data as unknown as AnalyticsDetailModel,
    };
}