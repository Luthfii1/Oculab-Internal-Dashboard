// dummy data getTimeAnalyticsList generate 20 data with data type AnalyticsListModel
import { AnalyticsListModel, AnalyticsType } from "@/schemas/analytics/model";
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