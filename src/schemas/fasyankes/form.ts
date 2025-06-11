import { z } from 'zod';
import { FasyankesType, Province } from './model';

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

export const typeOptions = Object.entries(FasyankesType).map(([_, value]) => ({
  value,
  label: value
})); 

export const provinceOptions = Object.entries(Province).map(([_, value]) => ({
  value,
  label: value
})); 