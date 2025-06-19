'use client';
import DataTableWithTitle from "../shared/DataTableWithTitle";
import Image from "next/image";
import { useEffect, useState } from "react";
import { analyticsColumns, AnalyticsListModel } from "@/schemas/analytics/model";
import { getTimeAnalyticsList } from "@/api/analytics/AnalyticsApis";
import { formatDuration } from "@/lib/utils";
import { StatusExaminationType } from "@/schemas/enum/StatusExaminationType";

export default function AnalyticsDashboard() {
  const [data, setData] = useState<AnalyticsListModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [averageDuration, setAverageDuration] = useState<string>("00:00:00");
  const [notStarted, setNotStarted] = useState<number>(0);
  const [inProgress, setInProgress] = useState<number>(0);
  const [finished, setFinished] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTimeAnalyticsList();
      
      setData(data as AnalyticsListModel[]);
      setAverageDuration(calculateAverageDuration(data).toString());
      countStatus(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  // create a function to calculate the average duration if only the status is finished and the total duration is not 0 
  const calculateAverageDuration = (data: AnalyticsListModel[]) => {
    const finishedData = data.filter(item => item.examinationStatus === StatusExaminationType.FINISHED && item.totalDuration !== "00:00:00");
    if (finishedData.length === 0) {
      return "00:00:00";
    }
    
    // Convert duration strings to seconds, calculate average, then format back
    const totalSeconds = finishedData.reduce((acc, curr) => {
      const [hours, minutes, seconds] = curr.totalDuration.split(':').map(Number);
      return acc + (hours * 3600 + minutes * 60 + seconds);
    }, 0);
    
    const averageSeconds = Math.floor(totalSeconds / finishedData.length);
    return formatDuration(averageSeconds);
  }

  // create a function to count the number of notstarted, inprogress, needvalidation, and finished
  const countStatus = (data: AnalyticsListModel[]) => {
    setNotStarted(data.filter(item => item.examinationStatus === StatusExaminationType.NOTSTARTED).length);
    setInProgress(data.filter(item => item.examinationStatus === StatusExaminationType.INPROGRESS || item.examinationStatus === StatusExaminationType.NEEDVALIDATION).length);
    setFinished(data.filter(item => item.examinationStatus === StatusExaminationType.FINISHED).length);
  }
  
  return (
  <div className="W-full mt-8 mx-auto p-0">
  
    {/* title with icon and text */}
    <div className="flex items-center gap-2 min-h-[48px] mb-2">
      <Image src="/icons/time-color-icon.svg" alt="Time Color Icon" width={32} height={32} className="text-purple-500" />
      <h1 className="text-2xl font-bold mb-0">Analysis Monitoring</h1>
    </div>
    
    {/* Group of information cards */}
    <div className="flex justify-between items-stretch gap-4 mb-8">
      {/* Information card 1 */}
      <div className="flex items-center bg-slate-50 border border-slate-200 rounded-2xl px-4 py-2 gap-4 w-full">
        {/* Icon section */}
        <Image src="/icons/analytics-card-icon.svg" alt="Analytics Card Icon" width={60} height={60} />

        {/* Info section */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-sm text-slate-500 font-medium">Total Pemeriksaan</div>
          <div className="flex items-center gap-6">
            {/* Belum dimulai */}
            <div className="flex items-baseline gap-1 items-center">
              <span className="text-blue-500 text-2xl font-bold">{notStarted}</span>
              <span className="font-semibold text-slate-800 ml-1">belum dimulai</span>
            </div>
            <div className="h-6 border-l border-slate-200 mx-2" />
            {/* Sedang berjalan */}
            <div className="flex items-baseline gap-1 items-center">
              <span className="text-blue-500 text-2xl font-bold">{inProgress}</span>
              <span className="font-semibold text-slate-800 ml-1">sedang berjalan</span>
            </div>
            <div className="h-6 border-l border-slate-200 mx-2" />
            {/* Selesai */}
            <div className="flex items-baseline gap-1 items-center">
              <span className="text-blue-500 text-2xl font-bold">{finished}</span>
              <span className="font-semibold text-slate-800 ml-1">selesai</span>
            </div>
          </div>
        </div>
      </div>

      {/* Information card 2 */}
      <div className="flex items-center bg-slate-50 border border-slate-200 rounded-2xl p-4 gap-4">
        {/* Icon section */}
        <Image src="/icons/time-card-icon.svg" alt="Time Card Icon" width={60} height={60} />

        {/* Info section */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-sm text-slate-500 font-medium">Rata-rata Waktu Pemeriksaan</div>
          <div className="text-2xl font-bold">{averageDuration}</div>
        </div>
      </div>
    </div>

    {/* Data Table with Title */}
    <DataTableWithTitle
      title="Daftar Pemeriksaan"
      icon={<Image src="/icons/list-fasyanken-icon.svg" alt="List Fasyanken Icon" width={40} height={40} />}
      columns={analyticsColumns}
      data={data}
      isLoading={isLoading}
    />
  </div>
  );
}