import React from "react";

interface BaseButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
  variant?: "white" | "black";
}

const BaseButton: React.FC<BaseButtonProps> = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  fullWidth = false,
  variant = "white",
}) => {
  const variantClasses =
    variant === "black"
      ? "bg-black text-white hover:bg-gray-900"
      : "bg-white text-black hover:bg-black hover:text-white";

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        rounded-full px-8 py-3 cursor-pointer transition-all
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantClasses}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default BaseButton;
