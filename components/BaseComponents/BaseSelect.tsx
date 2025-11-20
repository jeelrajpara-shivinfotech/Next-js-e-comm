"use client";

type Option = {
  label: string;
  value: string;
};

type BaseSelectProps = {
  title?: string;
  type?: "checkbox" | "radio" | "select";
  options: Option[];
  selected: string[] | string;
  onChange: (value: string) => void;
};

export default function BaseSelect({
  title,
  type = "checkbox",
  options,
  selected,
  onChange,
}: BaseSelectProps) {
  return (
    <div className={type === "select" ? "space-y-0" : "space-y-3"}>
      <p className="text-lg font-semibold">{title}</p>
      {type === "select" && (
        <select
          value={selected as string}
          onChange={(e) => onChange(e.target.value)}
          className="border border-gray-200 px-3 py-2 rounded-md w-full cursor-pointer"
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      )}
      {(type === "checkbox" || type === "radio") && (
        <div className="space-y-2">
          {options.map((o) => (
            <label
              key={o.value}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type={type}
                checked={
                  type === "checkbox"
                    ? (selected as string[]).includes(o.value)
                    : selected === o.value
                }
                className="cursor-pointer"
                onChange={() => onChange(o.value)}
              />
              <span>{o.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
