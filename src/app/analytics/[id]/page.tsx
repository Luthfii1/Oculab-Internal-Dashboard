import { getAnalyticsDetail } from "@/api/analytics/AnalyticsApis";
import AnalyticsDetail from "@/components/analytics/AnalyticsDetail";

export default async function AnalyticsExaminationDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await getAnalyticsDetail(id);

  return (
    <AnalyticsDetail analyticsDetailData={data} />
  );
} 