import StatusBadge from './StatusBadge';

export default function DataTable({
  columns,
  data,
  onEdit,
  onDelete,
  onToggleStatus,
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              {columns.map((col) => (
                <th key={col.key} className="text-left px-4 py-3 font-semibold text-gray-600">
                  {col.label}
                </th>
              ))}
              <th className="text-right px-4 py-3 font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.length === 0 && (
              <tr>
                <td colSpan={columns.length + 1} className="px-4 py-8 text-center text-gray-400">
                  Belum ada data.
                </td>
              </tr>
            )}
            {data.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50 transition">
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-3 text-gray-700 max-w-xs truncate">
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                ))}
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    {onToggleStatus && (
                      <button
                        onClick={() => onToggleStatus(row.id, row.status)}
                        className="text-xs px-2 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100"
                      >
                        {row.status === 'published' ? 'Unpublish' : 'Publish'}
                      </button>
                    )}
                    <button
                      onClick={() => onEdit(row.id)}
                      className="text-xs px-2 py-1 rounded bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(row.id)}
                      className="text-xs px-2 py-1 rounded bg-red-50 text-red-700 hover:bg-red-100 border border-red-200"
                    >
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
