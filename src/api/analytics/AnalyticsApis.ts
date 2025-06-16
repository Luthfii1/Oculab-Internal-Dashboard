import axios from 'axios';
import { getAnalyticsDetailDummy, getTimeAnalyticsListDummy } from './dummyAnalytics';
import { AnalyticsDetailModel, AnalyticsListModel } from '@/schemas/analytics/model';
import { ApiResponse, extractApiErrorMessage, handleResponse } from '@/lib/apiUtils';
import { BASE_URL, USING_DUMMY_DATA } from '@/lib/constant';

export async function getTimeAnalyticsList(): Promise<AnalyticsListModel[]> {
  try {
    if (USING_DUMMY_DATA) {
      const res = await getTimeAnalyticsListDummy();
      const response = handleResponse(res as unknown as ApiResponse<AnalyticsListModel[]>);
      return response.data as AnalyticsListModel[];
    }
    const res = await axios.get(`${BASE_URL}/healthFacility/get-all-health-facilities`);
    const response = handleResponse(res.data);
    return response.data as AnalyticsListModel[];
  } catch (error: unknown) {
    throw new Error(extractApiErrorMessage(error, 'Failed to fetch time analytics list'));
  }
}

export async function getAnalyticsDetail(id: string): Promise<AnalyticsDetailModel> {
  try {
    if (USING_DUMMY_DATA) {
      const res = await getAnalyticsDetailDummy();
      const response = handleResponse(res as unknown as ApiResponse<AnalyticsDetailModel>);
      return response.data as AnalyticsDetailModel;
    }
    const res = await axios.get(`${BASE_URL}/healthFacility/get-health-facility-detail/${id}`);
    const response = handleResponse(res.data);
    return response.data as AnalyticsDetailModel;
  } catch (error: unknown) {
    throw new Error(extractApiErrorMessage(error, 'Failed to fetch analytics detail'));
  }
}