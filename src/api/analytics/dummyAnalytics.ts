// dummy data getTimeAnalyticsList generate 20 data with data type AnalyticsListModel
import { AnalyticsDetailModel, AnalyticsListModel, AnalyticsType } from "@/schemas/analytics/model";
import { ApiResponse } from "@/lib/apiUtils";

export async function getTimeAnalyticsListDummy(): Promise<ApiResponse<AnalyticsListModel[]>> {
    const defaultData = Array.from({ length: 19 }).map((_, i) => ({
        _id: i + 1,
        analysisId: 'BRN-12345678',
        fasyankesName: 'Klinik Sehat Sentosa',
        status: AnalyticsType.BELUM_DIMULAI,
        analysisTime: '00:10:00',
        analysisDate: '27/12/2001',
        province: 'Kalimantan Selatan',
    }));

    // Add one different data for search testing
    const searchTestData = {
        _id: 20,
        analysisId: 'BRN-0987654',
        fasyankesName: 'Rumah Sakit Medika Sejahtera',
        status: AnalyticsType.SELESAI,
        analysisTime: '00:10:00',
        analysisDate: '27/12/2001',
        province: 'Jawa Timur',
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
        analysisId: 'BRN-12345678',
        fasyankesName: 'Klinik Sehat Sentosa',
        status: AnalyticsType.SELESAI,
        analysisTime: '00:10:00',
        analysisDate: '27/12/2001',
        province: 'Kalimantan Selatan',
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