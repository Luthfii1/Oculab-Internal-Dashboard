import { z } from 'zod';
import { ProvinceType } from '../enum/ProvinceType';
import { HealthFacilityType } from '../enum/HealthFacilityType';

export const fasyankesFormSchema = z.object({
  _id: z.string().optional(),
  name: z.string().min(1, { message: 'Nama fasyankes harus diisi' }),
  type: z.string().min(1, { message: 'Jenis fasyankes harus diisi' }),
  permitNumber: z.string().min(1, { message: 'Nomor SIP/STR/Izin Klinik harus diisi' }),
  address: z.string().min(1, { message: 'Alamat harus diisi' }),
  facilityPICName: z.string().min(1, { message: 'Nama penanggung jawab harus diisi' }),
  facilityPICEmail: z.string().email({ message: 'Email tidak valid' }),
  code: z.string().optional(),
  province: z.string().min(1, { message: 'Provinsi harus diisi' }),
});

export type FasyankesFormSchema = z.infer<typeof fasyankesFormSchema>;

export const typeOptions = Object.entries(HealthFacilityType).map(([_, value]) => ({
  value,
  label: value
})); 

export const provinceOptions = Object.entries(ProvinceType).map(([_, value]) => ({
  value,
  label: value
})); 