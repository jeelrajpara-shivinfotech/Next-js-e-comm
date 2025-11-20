"use client";

type Option = {
  label: string;
  value: string;
};
type BaseSelectProps<T = unknown> = {
  title?: string;
  type?: "checkbox" | "radio" | "select";
  options: Option[];
  selected: string[] | string;
  onChange: (value: string | string[]) => void;
  onSortChange?: (value: string, sortedData?: T[]) => void;
  onCategoryChange?: (categories: string[]) => void;
  data?: T[];
  sortKey?: string;
};

export default function BaseSelect<T = unknown>({
  title,
  type = "checkbox",
  options,
  selected,
  onChange,
  onSortChange,
  onCategoryChange,
  data,
  sortKey = 'title'
}: BaseSelectProps<T>) {
  const handleSorting = (value: string) => {
    if (!data) {
      onSortChange?.(value);
      return;
    }

    const sorted = [...data];

    switch (value) {
      case "a-z":
        sorted.sort((a, b) => {
          const aValue = String((a as Record<string, unknown>)?.[sortKey] ?? "");
          const bValue = String((b as Record<string, unknown>)?.[sortKey] ?? "");
          return aValue.localeCompare(bValue);
        });
        break;
      case "z-a":
        sorted.sort((a, b) => {
          const aValue = String((a as Record<string, unknown>)?.[sortKey] ?? "");
          const bValue = String((b as Record<string, unknown>)?.[sortKey] ?? "");
          return bValue.localeCompare(aValue);
        });
        break;
      case "price-low-high":
        sorted.sort((a, b) => {
          const aPrice = Number((a as { price?: unknown })?.price ?? 0);
          const bPrice = Number((b as { price?: unknown })?.price ?? 0);
          return aPrice - bPrice;
        });
        break;
      case "price-high-low":
        sorted.sort((a, b) => {
          const aPrice = Number((a as { price?: unknown })?.price ?? 0);
          const bPrice = Number((b as { price?: unknown })?.price ?? 0);
          return bPrice - aPrice;
        });
        break;
      default:
        break;
    }

    onSortChange?.(value, sorted);
  };

  const handleCheckboxChange = (value: string) => {
    const currentSelected = selected as string[];
    let updated: string[];
    
    if (currentSelected?.includes(value)) {
      updated = currentSelected?.filter((c) => c !== value) ?? [];
    } else {
      updated = [...(currentSelected ?? []), value];
    }
    onChange(updated);
    onCategoryChange?.(updated);
  };

  const handleSelectChange = (value: string) => {
    onChange(value);
    handleSorting(value);
  };

  const handleRadioChange = (value: string) => {
    onChange(value);
  };

  return (
    <div className={type === "select" ? "space-y-0" : "space-y-3"}>
      {title && <p className="text-lg font-semibold">{title}</p>}
      {type === "select" && (
        <select
          value={selected as string}
          onChange={(e) => handleSelectChange(e.target.value)}
          className="border border-gray-200 px-3 py-2 rounded-md w-full cursor-pointer"
        >
          {options?.map((o) => (
            <option key={o?.value} value={o?.value}>
              {o?.label}
            </option>
          ))}
        </select>
      )}
      {(type === "checkbox" || type === "radio") && (
        <div className="space-y-2">
          {options?.map((o) => (
            <label
              key={o?.value}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type={type}
                checked={
                  type === "checkbox"
                    ? (selected as string[])?.includes(o?.value) ?? false
                    : selected === o?.value
                }
                className="cursor-pointer"
                onChange={() => 
                  type === "checkbox" 
                    ? handleCheckboxChange(o?.value)
                    : handleRadioChange(o?.value)
                }
              />
              <span>{o?.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}