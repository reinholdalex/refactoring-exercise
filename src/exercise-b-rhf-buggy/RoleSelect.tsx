// A "design system" style select — it takes `value` / `onChange` as plain props,
// the way many real component libraries do, rather than being a native <select>
// that a ref/register call can attach to directly.
interface RoleSelectProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const OPTIONS = [
  { value: 'engineer', label: 'Engineer' },
  { value: 'designer', label: 'Designer' },
  { value: 'pm', label: 'Product Manager' },
];

export function RoleSelect({ value, onChange, error }: RoleSelectProps) {
  return (
    <div>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <div className="error">{error}</div>}
    </div>
  );
}
