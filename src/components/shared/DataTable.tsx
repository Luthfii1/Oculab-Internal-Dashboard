import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  HeaderGroup,
  Row,
  Cell,
  TableMeta,
} from "@tanstack/react-table";
import { useRouter, usePathname } from "next/navigation";

// Define a type for objects that can have either _id or examinationId
type RowWithId = {
  _id?: string;
  examinationId?: string;
};

// Type guard function to determine which ID to use
function getRowId(row: RowWithId): string {
  if ('_id' in row && row._id) {
    return row._id;
  }
  if ('examinationId' in row && row.examinationId) {
    return row.examinationId;
  }
  return '';
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  meta?: TableMeta<TData>;
  isLoading?: boolean;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  meta,
  isLoading,
}: DataTableProps<TData, TValue>) {
  const router = useRouter();
  const pathname = usePathname();
  const basePath = pathname.split('/')[1];
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta,
  });

  return (
    <div className="overflow-x-auto rounded-2xl shadow-sm border border-slate-200">
      <table className="min-w-full text-sm">
        <thead>
          {table.getHeaderGroups().map((headerGroup: HeaderGroup<TData>) => (
            <tr key={headerGroup.id} className="border-b border-slate-200 bg-purple-100">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="text-left py-2 px-3 text-center font-semibold text-slate-900 text-xs"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={columns.length} className="py-4 px-3 text-center text-slate-500">
                <div className="flex items-center justify-center gap-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-purple-500"></div>
                  <span>Fetching data, please wait...</span>
                </div>
              </td>
            </tr>
          ) : (
            table.getRowModel().rows.map((row: Row<TData>) => (
              <tr
                key={row.id}
                className="border-b border-slate-100 hover:bg-slate-50 hover:cursor-pointer"
                onClick={() => {
                  const id = getRowId(row.original as RowWithId);
                  if (id) {
                    router.push(`/${basePath}/${id}`);
                  }
                }}
              >
                {row.getVisibleCells().map((cell: Cell<TData, unknown>) => (
                  <td key={cell.id} className="py-2 px-3 text-xs text-slate-500">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
} 