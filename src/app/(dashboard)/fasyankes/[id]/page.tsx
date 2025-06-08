import { getFasyankesDetail } from '@/api/FasyankesApis';
import DetailFasyankes from '@/components/fasyankes/detailFasyankes';

export default async function FasyankesDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await getFasyankesDetail(id);

  return (
    <DetailFasyankes data={data} />
  );
} 