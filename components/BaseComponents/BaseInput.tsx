import React from "react";

interface BaseInputProps {
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  rightElement?: React.ReactNode;
  withBackground?: boolean;
}

const BaseInput: React.FC<BaseInputProps> = ({
  type = "text",
  name,
  value,
  placeholder,
  onChange,
  className = "",
  rightElement,
  withBackground = true,
}) => {
  return (
    <div  className={`flex w-full overflow-hidden ${
        withBackground ? "bg-white border border-gray-200 rounded-md" : "border-b border-gray-300"
      }`}>
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className={`flex-1 px-4 py-3 font-jost outline-none ${className}`}
      />
      {rightElement && (
        <div className="flex items-center justify-center px-3">
          {rightElement}
        </div>
      )}
    </div>
  );
};

export default BaseInput;
