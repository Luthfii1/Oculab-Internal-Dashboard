import axios from 'axios';
import { ApiResponse, extractApiErrorMessage, handleResponse } from '@/lib/apiUtils';
import { BASE_URL, USING_DUMMY_DATA } from '@/lib/constant';
import { ExaminationModel } from '@/schemas/examination/model';
import { getExaminationDetailDummy } from './dummyExaminations';

export async function getExaminationDetail(id: string): Promise<ExaminationModel> {
  try {
    if (USING_DUMMY_DATA) {
      const res = await getExaminationDetailDummy(id);
      const response = handleResponse(res as unknown as ApiResponse<ExaminationModel>);
      return response.data as ExaminationModel;
    }
    const res = await axios.get(`${BASE_URL}/examination/get-examination-detail/${id}`);
    const response = handleResponse(res.data);
    return response.data as ExaminationModel;
  } catch (error: unknown) {
    throw new Error(extractApiErrorMessage(error, 'Failed to fetch examination detail'));
  }
}