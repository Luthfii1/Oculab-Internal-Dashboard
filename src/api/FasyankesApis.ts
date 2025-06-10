import axios from 'axios';
import { getFasyankesDetailDummy, getFasyankesListDummy } from './dummyFasyankes';
import { FasyankesFormSchema, FasyankesModel } from '@/schemas/fasyankes';
import { ApiResponse, handleResponse } from '@/lib/apiUtils';
import { API_URL } from '@/lib/constant';

const IS_DEVELOPMENT_MODE = process.env.NEXT_PUBLIC_IS_DEVELOPMENT_MODE === 'true';
const BASE_URL = IS_DEVELOPMENT_MODE ? 'http://localhost:8080' : API_URL || 'http://localhost:8080';
const USING_DUMMY_DATA = process.env.NEXT_PUBLIC_USING_DUMMY_DATA === 'true';

export async function getFasyankesList(): Promise<FasyankesModel[]> {
  try {
    if (USING_DUMMY_DATA) {
      let res = await getFasyankesListDummy();
      let response = handleResponse(res as unknown as ApiResponse<FasyankesModel[]>);
      return response.data as FasyankesModel[];
    }
    const res = await axios.get(`${BASE_URL}/healthFacility/get-all-health-facilities`);
    let response = handleResponse(res.data);
    return response.data as FasyankesModel[];
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Failed to fetch fasyankes list');
  }
}

export async function getFasyankesDetail(healthFacilityId: string): Promise<FasyankesModel> {
  try {
    if (USING_DUMMY_DATA) {
      let res = await getFasyankesDetailDummy(healthFacilityId);
      let response = handleResponse(res as unknown as ApiResponse<FasyankesModel>);
      return response.data as FasyankesModel;
    }
    const res = await axios.get(`${BASE_URL}/healthFacility/get-health-facility-detail/${healthFacilityId}`);
    let response = handleResponse(res.data);
    return response.data as FasyankesModel;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Failed to fetch fasyankes detail');
  }
}

export async function createFasyankes(data: FasyankesFormSchema): Promise<FasyankesModel> {
  try {
    const res = await axios.post(`${BASE_URL}/healthFacility/create-new-health-facility`, data);
    let response = handleResponse(res.data);
    return response.data as FasyankesModel;
  } catch (error: any) {
    throw new Error(error?.response?.data?.data?.description || 'Failed to create fasyankes');
  }
}

export async function updateFasyankes(healthFacilityId: string, data: FasyankesFormSchema): Promise<FasyankesModel> {
  try {
    const res = await axios.put(`${BASE_URL}/healthFacility/update-health-facility/${healthFacilityId}`, data);
    let response = handleResponse(res.data);
    return response.data as FasyankesModel;
  } catch (error: any) {
    throw new Error(error?.response?.data?.data?.description || 'Failed to update fasyankes');
  }
}

export async function deleteFasyankes(healthFacilityId: string): Promise<FasyankesModel> {
  try {
    const res = await axios.delete(`${BASE_URL}/healthFacility/delete-health-facility/${healthFacilityId}`);
    let response = handleResponse(res.data);
    return response.data as FasyankesModel;
  } catch (error: any) {
    throw new Error(error?.response?.data?.data?.description || 'Failed to delete fasyankes');
  }
}