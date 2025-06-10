import { z } from 'zod';
import { FasyankesType } from './model';

export const fasyankesFormSchema = z.object({
  _id: z.string().optional(),
  name: z.string().min(1, { message: 'Nama fasyankes harus diisi' }),
  type: z.nativeEnum(FasyankesType, {
    errorMap: () => ({ message: 'Jenis fasyankes harus diisi' })
  }),
  permitNumber: z.string().min(1, { message: 'Nomor SIP/STR/Izin Klinik harus diisi' }),
  address: z.string().min(1, { message: 'Alamat harus diisi' }),
  facilityPICName: z.string().min(1, { message: 'Nama penanggung jawab harus diisi' }),
  facilityPICEmail: z.string().email({ message: 'Email tidak valid' }),
  code: z.string().optional(),
});

export type FasyankesFormSchema = z.infer<typeof fasyankesFormSchema>;

export const typeOptions = Object.entries(FasyankesType).map(([key, value]) => ({
  value,
  label: value
})); 