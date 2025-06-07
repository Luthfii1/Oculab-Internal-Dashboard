import DetailFasyankes from '@/components/fasyankes/detailFasyankes';

async function getFasyankesDetail(id: string) {
    // dummy data
    return {
        id: 1,
        nama: 'Klinik Sehat Sentosa',
        kode: '1234567890',
        jenis: 'Klinik Pratama',
        izin: '1234567890',
        alamat: 'Jl. Raya No. 123, Jakarta',
        penanggungJawab: 'Dr. John Doe',
        email: 'john.doe@example.com',
        created: '2021-01-01',
        updated: '2021-01-01',
    }
    // TODO: get data from api
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/fasyankes/${id}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Data not found');
  return res.json();
}

export default async function FasyankesDetailPage({ params }: { params: { id: string } }) {
  const data = await getFasyankesDetail(params.id);
  
  return (
    <DetailFasyankes data={data} />
  );
} 