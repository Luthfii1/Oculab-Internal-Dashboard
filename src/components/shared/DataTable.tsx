import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  HeaderGroup,
  Row,
  Cell,
} from "@tanstack/react-table";
import { useRouter } from "next/navigation";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  meta?: any;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  meta,
}: DataTableProps<TData, TValue>) {
  const router = useRouter();
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
          {table.getRowModel().rows.map((row: Row<TData>) => (
            <tr
              key={row.id}
              className="border-b border-slate-100 hover:bg-slate-50 hover:cursor-pointer"
              onClick={() => router.push(`/fasyankes/${(row.original as any)._id}`)}
            >
              {row.getVisibleCells().map((cell: Cell<TData, unknown>) => (
                <td key={cell.id} className="py-2 px-3 text-xs text-slate-500">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 