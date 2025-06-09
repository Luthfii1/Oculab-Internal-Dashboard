import React, { useState } from 'react';
import Image from 'next/image';
import { Search as LucideSearch, Filter as LucideFilter, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

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

const PAGE_SIZE_OPTIONS = [5, 10, 20, 50];

const DataTableWithTitle: React.FC<DataTableWithTitleProps> = ({ title, iconAddress, columns, data }) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const router = useRouter();

  const totalPages = Math.ceil(data.length / pageSize);
  const paginatedData = data.slice((page - 1) * pageSize, page * pageSize);

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(Number(e.target.value));
    setPage(1);
  };

  const goToPage = (newPage: number) => {
    setPage(Math.max(1, Math.min(totalPages, newPage)));
  };

  return (
    <div className="bg-white">

      {/* title with icon and text */}
      <div className="flex items-center gap-3 mb-4">
        {iconAddress && (
          <Image src={iconAddress} alt={title} width={40} height={40} />
        )}
        <h2 className="text-base font-bold text-slate-900">{title}</h2>
      </div>

      {/* search bar with button filter at the edge of the right and magnifying glass icon inside the search bar */}
      <div className="flex items-center justify-between mb-4 gap-4">
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
            <tr className="border-b border-slate-200 bg-purple-100">
              {columns.map((col) => (
                <th key={col.accessorKey} className="text-left py-2 px-3 text-center font-semibold text-slate-900 text-xs">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, idx) => (
              <tr
                key={idx}
                className="border-b border-slate-100 hover:bg-slate-50 hover:cursor-pointer"
                onClick={() => router.push(`/fasyankes/${row._id}`)}
              >
                {columns.map((col) => (
                  <td key={col.accessorKey} className="py-2 px-3 text-xs text-slate-500">
                    {col.cell ? col.cell({ ...row, index: (page - 1) * pageSize + idx }) : row[col.accessorKey]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end gap-6 mt-4 text-slate-700 text-sm">
        <div className="flex items-center gap-2">
          <span>Rows per page</span>
          <select
            className="border border-slate-200 rounded-md px-2 py-1 focus:outline-none"
            value={pageSize}
            onChange={handlePageSizeChange}
          >
            {PAGE_SIZE_OPTIONS.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
        <span>
          Page {page} of {totalPages}
        </span>
        <div className="flex items-center gap-1">
          <button
            className="border border-slate-200 rounded-md w-8 h-8 flex items-center justify-center disabled:opacity-50"
            onClick={() => goToPage(1)}
            disabled={page === 1}
            aria-label="First page"
          >
            <ChevronsLeft className="w-4 h-4" />
          </button>
          <button
            className="border border-slate-200 rounded-md w-8 h-8 flex items-center justify-center disabled:opacity-50"
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
            aria-label="Previous page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            className="border border-slate-200 rounded-md w-8 h-8 flex items-center justify-center disabled:opacity-50"
            onClick={() => goToPage(page + 1)}
            disabled={page === totalPages}
            aria-label="Next page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            className="border border-slate-200 rounded-md w-8 h-8 flex items-center justify-center disabled:opacity-50"
            onClick={() => goToPage(totalPages)}
            disabled={page === totalPages}
            aria-label="Last page"
          >
            <ChevronsRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTableWithTitle; 