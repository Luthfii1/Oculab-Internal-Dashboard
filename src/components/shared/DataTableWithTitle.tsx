import React, { useState, useEffect } from 'react';
import { Search as LucideSearch, Filter as LucideFilter, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react';
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from './DataTable';

// Types for columns and data
export interface Column {
  header: string;
  accessorKey: string;
  cell?: (row: unknown) => React.ReactNode;
}

interface DataTableWithTitleProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  title: string;
  icon?: React.ReactNode;
  isLoading?: boolean;
}

const PAGE_SIZE_OPTIONS = [5, 10, 20, 50];

export function DataTableWithTitle<TData, TValue>({
  columns,
  data,
  title,
  icon,
  isLoading,
}: DataTableWithTitleProps<TData, TValue>) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState<TData[]>([]);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredData(data);
    }
  }, [data, searchQuery]);

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const paginatedData = filteredData.slice((page - 1) * pageSize, page * pageSize);

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(Number(e.target.value));
    setPage(1);
  };

  const goToPage = (newPage: number) => {
    setPage(Math.max(1, Math.min(totalPages, newPage)));
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      setFilteredData(data);
      return;
    }

    const searchLower = query.toLowerCase();
    const filtered = data.filter((item: unknown) => {
      // Search through all string fields
      return Object.entries(item as Record<string, unknown>).some(([_, value]) => {
        if (typeof value === 'string') {
          return value.toLowerCase().includes(searchLower);
        }
        return false;
      });
    });

    setFilteredData(filtered);
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      {/* search bar with button filter at the edge of the right and magnifying glass icon inside the search bar */}
      <div className="flex items-center justify-between mb-4 gap-4">
        <div className="relative w-full">
          <input 
            type="text" 
            placeholder="Cari nama fasyankes..." 
            className="w-full pl-4 pr-10 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <LucideSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
        </div>
        <button className="bg-purple-500 hover:bg-purple-600 text-white rounded-lg px-4 py-2 font-semibold text-xs transition-colors duration-200 flex items-center gap-2">
          <LucideFilter className="w-5 h-5" />
          <span>Filter</span>
        </button>
      </div>

      <DataTable columns={columns} data={paginatedData} meta={{ page, pageSize }} isLoading={isLoading} />

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
}

export default DataTableWithTitle; 