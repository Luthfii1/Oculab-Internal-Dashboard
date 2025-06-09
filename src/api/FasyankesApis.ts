import axios from 'axios';
import { getFasyankesDetailDummy, getFasyankesListDummy } from './dummyFasyankes';
import { FasyankesFormSchema } from '@/components/fasyankes/FasyankesForm';
import { FasyankesModel } from '@/model/FasyankesModel';

const IS_DEVELOPMENT_MODE = process.env.NEXT_PUBLIC_IS_DEVELOPMENT_MODE && process.env.NEXT_PUBLIC_IS_DEVELOPMENT_MODE !== null;
const BASE_URL = IS_DEVELOPMENT_MODE ? 'http://localhost:8080' : process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8080';
const USING_DUMMY_DATA = process.env.NEXT_PUBLIC_USING_DUMMY_DATA && process.env.NEXT_PUBLIC_USING_DUMMY_DATA !== null;

export async function getFasyankesList() {
  try {
    if (USING_DUMMY_DATA) {
      return getFasyankesListDummy() as unknown as FasyankesModel[];
    }
    const res = await axios.get(`${BASE_URL}/api/fasyankes`);
    return res. data as FasyankesModel[];
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Failed to fetch fasyankes list');
  }
}

export async function getFasyankesDetail(id: string) {
  try {
    if (USING_DUMMY_DATA) {
      return getFasyankesDetailDummy(id) as unknown as FasyankesModel;
    }
    const res = await axios.get(`${BASE_URL}/api/fasyankes/${id}`);
    return res.data as FasyankesModel;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Failed to fetch fasyankes detail');
  }
}

export async function createFasyankes(data: any) {
  try {
    const res = await axios.post(`${BASE_URL}/api/fasyankes`, data);
    return res.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Failed to create fasyankes');
  }
}

export async function updateFasyankes(id: string, data: any) {
  try {
    const res = await axios.put(`${BASE_URL}/api/fasyankes/${id}`, data);
    return res.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Failed to update fasyankes');
  }
}

export async function deleteFasyankes(id: string) {
  try {
    const res = await axios.delete(`${BASE_URL}/api/fasyankes/${id}`);
    return res.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Failed to delete fasyankes');
  }
}