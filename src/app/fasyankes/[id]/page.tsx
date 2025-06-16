import { getFasyankesDetail } from '@/api/fasyankes/FasyankesApis';
import FasyankesDetail from '@/components/fasyankes/FasyankesDetail';

export default async function FasyankesDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await getFasyankesDetail(id);

  return (
    <FasyankesDetail fasyankesData={data} />
  );
} 