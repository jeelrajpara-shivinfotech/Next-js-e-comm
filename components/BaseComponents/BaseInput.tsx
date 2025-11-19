import React from "react";

interface BaseInputProps {
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  rightElement?: React.ReactNode;
}

const BaseInput: React.FC<BaseInputProps> = ({
  type = "text",
  value,
  placeholder,
  onChange,
  className = "",
  rightElement,
}) => {
  return (
    <div className={`flex w-full bg-white border border-gray-200 rounded-md overflow-hidden`}>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`flex-1 px-4 py-3 font-jost outline-none ${className}`}
      />

      {/* Only render if provided */}
      {rightElement && (
        <div className="flex items-center justify-center px-3">
          {rightElement}
        </div>
      )}
    </div>
  );
};

export default BaseInput;
