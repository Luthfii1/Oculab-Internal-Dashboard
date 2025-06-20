'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { RotateCcw, UserCheck } from 'lucide-react';
import { ConfirmationPopup } from '../shared/ConfirmationPopup';
import { FasyankesFormSchema, fasyankesFormSchema } from '@/schemas/fasyankes';
import { HealthFacilityType } from '@/schemas/enum/HealthFacilityType';
import { ProvinceType } from '@/schemas/enum/ProvinceType';

interface FasyankesFormProps {
  defaultValues?: Partial<FasyankesFormSchema>;
  onSubmit: (values: FasyankesFormSchema) => Promise<void> | void;
  submitText?: string;
  isLoading?: boolean;
  onCancel?: () => void;
  confirmationPopupProps?: React.ComponentProps<typeof ConfirmationPopup>;
}

export const FasyankesForm: React.FC<FasyankesFormProps> = ({
  defaultValues = {},
  onSubmit,
  submitText = 'Buat Akun',
  isLoading = false,
  onCancel,
  confirmationPopupProps,
}) => {
  const form = useForm<FasyankesFormSchema>({
    resolver: zodResolver(fasyankesFormSchema),
    mode: 'onChange',
    defaultValues: {
      _id: '',
      name: '',
      code: '',
      type: '',
      permitNumber: '',
      address: '',
      facilityPICName: '',
      facilityPICEmail: '',
      province: '',
      ...defaultValues,
    },
  });

  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [pendingValues, setPendingValues] = useState<FasyankesFormSchema | null>(null);

  const handleSubmit = (values: FasyankesFormSchema) => {
    if (confirmationPopupProps) {
      setPendingValues(values);
      setShowConfirm(true);
    } else {
      onSubmit(values);
    }
  };

  const handleConfirm = async () => {
    if (!pendingValues) return;
    setConfirmLoading(true);
    try {
      await onSubmit(pendingValues);
      setShowConfirm(false);
    } finally {
      setConfirmLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          rules={{ required: true }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Fasyankes</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Masukkan nama fasyankes" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kode Fasyankes</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Masukkan kode fasyankes jika ada" />
              </FormControl>
              <div className="text-xs text-slate-500 mt-1">Masukkan kode fasyankes yang didapatkan dari dinas kesehatan</div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          rules={{ required: true }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Jenis Fasyankes</FormLabel>
              <Select onValueChange={field.onChange} value={field.value || ""}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih Jenis Fasyankes" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.entries(HealthFacilityType).map(([_, value]) => (
                    <SelectItem key={value} value={value}>{value}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="text-xs text-slate-500 mt-1">Pilih jenis fasyankes</div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="permitNumber"
          rules={{ required: true }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nomor SIP/STR/Izin Klinik</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Masukkan nomor izin" />
              </FormControl>
              <div className="text-xs text-slate-500 mt-1">Pilih salah satu nomor izin fasyankes</div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          rules={{ required: true }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Alamat</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Masukkan alamat lengkap" rows={3} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="province"
          rules={{ required: true }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Provinsi</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih provinsi" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.entries(ProvinceType).map(([_, value]) => (
                    <SelectItem key={value} value={value}>{value}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="text-xs text-slate-500 mt-1">Pilih provinsi fasyankes</div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="facilityPICName"
          rules={{ required: true }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Penanggung Jawab</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Masukkan nama penanggung jawab" />
              </FormControl>
              <div className="text-xs text-slate-500 mt-1">Penanggungjawab merupakan kepala laboratorium dari fasyankes yang didaftarkan</div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="facilityPICEmail"
          rules={{ required: true }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} type="email" placeholder="Masukkan email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-4">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="flex items-center gap-1 text-red-500 text-sm font-medium bg-transparent border-none p-0 m-0 hover:cursor-pointer focus:outline-none"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          )}
          <Button
            type="submit"
            disabled={!form.formState.isValid || isLoading}
            className={
              !form.formState.isValid || isLoading
                ? 'bg-slate-50 text-slate-400 border border-slate-200 cursor-not-allowed'
                : 'bg-purple-500 text-white hover:bg-purple-600 hover:cursor-pointer'
            }
          >
            <UserCheck className="w-4 h-4 mr-2 inline" />
            {submitText}
          </Button>
        </div>
      </form>

      {showConfirm && confirmationPopupProps && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/30">
          <ConfirmationPopup
            {...confirmationPopupProps}
            isLoading={confirmLoading}
            onConfirm={handleConfirm}
            onCancel={() => setShowConfirm(false)}
          />
        </div>
      )}
    </Form>
  );
}; 