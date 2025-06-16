import axios from 'axios';
import { getTimeAnalyticsListDummy } from './dummyAnalytics';
import { AnalyticsListModel } from '@/schemas/analytics/model';
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