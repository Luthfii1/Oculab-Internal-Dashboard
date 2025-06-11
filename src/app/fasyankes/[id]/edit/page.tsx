import { getFasyankesDetail } from '@/api/FasyankesApis';
import FasyankesCreateEdit from '@/components/fasyankes/FasyankesCreateEdit';

export default async function EditFasyankesPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await getFasyankesDetail(id);

  return <FasyankesCreateEdit fasyankesData={data} />;
}