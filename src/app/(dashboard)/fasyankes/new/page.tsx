'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronLeft, UserPlus, UserCheck, RotateCcw } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';

const formSchema = z.object({
  // required   
  nama: z.string().min(1, { message: 'Nama fasyankes harus diisi' }),
  jenis: z.string().min(1, { message: 'Jenis fasyankes harus diisi' }),
  izin: z.string().min(1, { message: 'Nomor SIP/STR/Izin Klinik harus diisi' }),
  alamat: z.string().min(1, { message: 'Alamat harus diisi' }),
  penanggungJawab: z.string().min(1, { message: 'Nama penanggung jawab harus diisi' }),
  email: z.string().email({ message: 'Email tidak valid' }),
  // optional
  kode: z.string().optional(),
});

type FormSchema = z.infer<typeof formSchema>;

const jenisOptions = [
  { value: 'kategori-a', label: 'Kategori A' },
  { value: 'kategori-b', label: 'Kategori B' },
  { value: 'kategori-c', label: 'Kategori C' },
  { value: 'kategori-d', label: 'Kategori D' },
];

const NewFasyankesPage = () => {
  const router = useRouter();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      nama: '',
      kode: '',
      jenis: '',
      izin: '',
      alamat: '',
      penanggungJawab: '',
      email: '',
    },
  });

  const onSubmit = async (values: FormSchema) => {
    await fetch('/api/fasyankes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    router.push('/fasyankes');
  };

  return (
    <div className="w-full mt-8 mx-auto p-0">
      {/* Back link */}
      <Link href="/fasyankes" className="flex items-center text-slate-600 hover:text-purple-600 mb-6 text-sm font-medium">
        <ChevronLeft className="w-5 h-5 mr-1" />
        Kembali
      </Link>

      {/* Title */}
      <div className="flex items-center gap-2 mb-8">
        <UserPlus className="w-6 h-6 text-purple-500" />
        <h1 className="text-xl font-bold text-slate-900">Tambahkan Akun Baru Fasyankes</h1>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="nama"
            rules={{ required: true }}
            render={({ field }: { field: any }) => (
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
            name="kode"
            render={({ field }: { field: any }) => (
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
            name="jenis"
            rules={{ required: true }}
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel>Jenis Fasyankes</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih jenis fasyankes" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {jenisOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="izin"
            rules={{ required: true }}
            render={({ field }: { field: any }) => (
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
            name="alamat"
            rules={{ required: true }}
            render={({ field }: { field: any }) => (
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
            name="penanggungJawab"
            rules={{ required: true }}
            render={({ field }: { field: any }) => (
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
            name="email"
            rules={{ required: true }}
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} type="email" placeholder="Masukkan email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-3 justify-end">
            <button
              type="button"
              onClick={() => form.reset()}
              className="flex items-center gap-1 text-red-500 text-sm font-medium bg-transparent border-none p-0 m-0 hover:cursor-pointer focus:outline-none"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
            <Button
              type="submit"
              disabled={!form.formState.isValid}
              className={
                !form.formState.isValid
                  ? 'bg-slate-50 text-slate-400 border border-slate-200 cursor-not-allowed'
                  : 'bg-purple-500 text-white hover:bg-purple-600 hover:cursor-pointer'
              }
            >
              <UserCheck className="w-4 h-4 mr-2 inline" />
              Buat Akun
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default NewFasyankesPage; 