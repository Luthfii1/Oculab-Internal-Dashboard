import axios from 'axios';
import { getFasyankesDetailDummy, getFasyankesListDummy } from './dummyFasyankes';
import { FasyankesFormSchema, FasyankesModel } from '@/schemas/fasyankes';
import { ApiResponse, extractApiErrorMessage, handleResponse } from '@/lib/apiUtils';
import { API_URL } from '@/lib/constant';

const IS_DEVELOPMENT_MODE = process.env.NEXT_PUBLIC_IS_DEVELOPMENT_MODE === 'true';
const BASE_URL = IS_DEVELOPMENT_MODE ? 'http://localhost:8080' : API_URL || 'http://localhost:8080';
const USING_DUMMY_DATA = process.env.NEXT_PUBLIC_USING_DUMMY_DATA === 'true';

export async function getFasyankesList(): Promise<FasyankesModel[]> {
  try {
    if (USING_DUMMY_DATA) {
      const res = await getFasyankesListDummy();
      const response = handleResponse(res as unknown as ApiResponse<FasyankesModel[]>);
      return response.data as FasyankesModel[];
    }
    const res = await axios.get(`${BASE_URL}/healthFacility/get-all-health-facilities`);
    const response = handleResponse(res.data);
    return response.data as FasyankesModel[];
  } catch (error: unknown) {
    throw new Error(extractApiErrorMessage(error, 'Failed to fetch fasyankes list'));
  }
}

export async function getFasyankesDetail(healthFacilityId: string): Promise<FasyankesModel> {
  try {
    if (USING_DUMMY_DATA) {
      const res = await getFasyankesDetailDummy(healthFacilityId);
      const response = handleResponse(res as unknown as ApiResponse<FasyankesModel>);
      return response.data as FasyankesModel;
    }
    const res = await axios.get(`${BASE_URL}/healthFacility/get-health-facility-detail/${healthFacilityId}`);
    const response = handleResponse(res.data);
    return response.data as FasyankesModel;
  } catch (error: unknown) {
    throw new Error(extractApiErrorMessage(error, 'Failed to fetch fasyankes detail'));
  }
}

export async function createFasyankes(data: FasyankesFormSchema): Promise<FasyankesModel> {
  try {
    const res = await axios.post(`${BASE_URL}/healthFacility/create-new-health-facility`, data);
    const response = handleResponse(res.data);
    return response.data as FasyankesModel;
  } catch (error: unknown) {
    throw new Error(extractApiErrorMessage(error, 'Failed to create fasyankes'));
  }
}

export async function updateFasyankes(healthFacilityId: string, data: FasyankesFormSchema): Promise<FasyankesModel> {
  try {
    const res = await axios.put(`${BASE_URL}/healthFacility/update-health-facility/${healthFacilityId}`, data);
    const response = handleResponse(res.data);
    return response.data as FasyankesModel;
  } catch (error: unknown) {
    throw new Error(extractApiErrorMessage(error, 'Failed to update fasyankes'));
  }
}

export async function deleteFasyankes(healthFacilityId: string): Promise<FasyankesModel> {
  try {
    const res = await axios.delete(`${BASE_URL}/healthFacility/delete-health-facility/${healthFacilityId}`);
    const response = handleResponse(res.data);
    return response.data as FasyankesModel;
  } catch (error: unknown) {
    throw new Error(extractApiErrorMessage(error, 'Failed to delete fasyankes'));
  }
}