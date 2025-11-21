import React from "react";

interface BaseButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
}

const BaseButton: React.FC<BaseButtonProps> = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  fullWidth = false,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        rounded-full px-5 py-3 cursor-pointer transition-all
        disabled:opacity-50 disabled:cursor-not-allowed
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default BaseButton;
