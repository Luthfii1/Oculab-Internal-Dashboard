import { getAnalyticsDetail } from "@/api/analytics/AnalyticsApis";
import { getExaminationDetail } from "@/api/examinations/ExaminationApis";
import AnalyticsDetail from "@/components/analytics/AnalyticsDetail";

export default async function AnalyticsExaminationDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await getAnalyticsDetail(id);
  const examinationData = await getExaminationDetail(id);

  return (
    <AnalyticsDetail analyticsDetailData={data} examinationData={examinationData} />
  );
} 