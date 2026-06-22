export default function FormField({ label, name, type = 'text', value, onChange, required, placeholder, options, rows }) {
  const baseClass = "w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition text-sm";

  const renderInput = () => {
    if (type === 'textarea') {
      return <textarea name={name} value={value || ''} onChange={onChange} rows={rows || 4} placeholder={placeholder} className={baseClass} />;
    }
    if (type === 'select') {
      return (
        <select name={name} value={value || ''} onChange={onChange} className={baseClass}>
          <option value="">-- Pilih --</option>
          {options?.map(opt => (
            <option key={typeof opt === 'string' ? opt : opt.value} value={typeof opt === 'string' ? opt : opt.value}>
              {typeof opt === 'string' ? opt : opt.label}
            </option>
          ))}
        </select>
      );
    }
    if (type === 'file') {
      return <input type="file" name={name} onChange={onChange} className="text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100" />;
    }
    return <input type={type} name={name} value={value || ''} onChange={onChange} required={required} placeholder={placeholder} className={baseClass} />;
  };

  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {renderInput()}
    </div>
  );
}
