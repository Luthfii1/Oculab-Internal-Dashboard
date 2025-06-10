import axios from 'axios';
import { getFasyankesDetailDummy, getFasyankesListDummy } from './dummyFasyankes';
import { FasyankesModel } from '@/schemas/fasyankes';
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

export async function createFasyankes(data: any): Promise<FasyankesModel> {
  try {
    const res = await axios.post(`${BASE_URL}/api/fasyankes`, data);
    return res.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Failed to create fasyankes');
  }
}

export async function updateFasyankes(id: string, data: any): Promise<FasyankesModel> {
  try {
    const res = await axios.put(`${BASE_URL}/api/fasyankes/${id}`, data);
    return res.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Failed to update fasyankes');
  }
}

export async function deleteFasyankes(id: string): Promise<FasyankesModel> {
  try {
    const res = await axios.delete(`${BASE_URL}/api/fasyankes/${id}`);
    return res.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Failed to delete fasyankes');
  }
}