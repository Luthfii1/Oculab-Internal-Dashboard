import React from 'react';
import Image from 'next/image';
import { Search as LucideSearch, Filter as LucideFilter } from 'lucide-react';

// Types for columns and data
export interface Column {
  header: string;
  accessorKey: string;
  cell?: (row: any) => React.ReactNode;
}

interface DataTableWithTitleProps {
  title: string;
  iconAddress?: string;
  columns: Column[];
  data: any[];
}

const DataTableWithTitle: React.FC<DataTableWithTitleProps> = ({ title, iconAddress, columns, data }) => {
  return (
    <div className="bg-white">

      {/* title with icon and text */}
      <div className="flex items-center gap-3 mb-6">
        {iconAddress && (
          <Image src={iconAddress} alt={title} width={40} height={40} />
        )}
        <h2 className="text-base font-bold text-slate-900">{title}</h2>
      </div>

      {/* search bar with button filter at the edge of the right and magnifying glass icon inside the search bar */}
      <div className="flex items-center justify-between mb-6 gap-4">
        <div className="relative w-full">
          <input type="text" placeholder="Cari nama fasyankes..." className="w-full pl-4 pr-10 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm" />
          <LucideSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
        </div>
        <button className="bg-purple-500 hover:bg-purple-600 text-white rounded-lg px-4 py-2 font-semibold text-xs transition-colors duration-200 flex items-center gap-2">
          <LucideFilter className="w-5 h-5" />
          <span>Filter</span>
        </button>
      </div>

      {/* table */}
      <div className="overflow-x-auto rounded-2xl shadow-sm border border-slate-200">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              {columns.map((col) => (
                <th key={col.accessorKey} className="text-left py-2 px-3 text-center text-slate-500 font-medium text-xs">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50">
                {columns.map((col) => (
                  <td key={col.accessorKey} className="py-2 px-3 text-xs text-slate-500">
                    {col.cell ? col.cell(row) : row[col.accessorKey]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTableWithTitle; 