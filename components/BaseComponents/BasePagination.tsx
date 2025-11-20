// components/BaseComponents/BasePagination.tsx
import React from "react";
import BaseButton from "./BaseButton";

interface BasePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  previousText?: string;
  nextText?: string;
  showPageNumbers?: boolean;
  className?: string;
}

export default function BasePagination({
  currentPage,
  totalPages,
  onPageChange,
  previousText = "Previous",
  nextText = "Next",
  showPageNumbers = true,
  className = ""
}: BasePaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className={`flex justify-center items-center gap-3 mt-8 select-none ${className}`}>
      <BaseButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`
          px-4! py-2! bg-transparent! text-black! 
          hover:bg-black! hover:text-white!
          ${currentPage === 1 ? "hidden" : ""}
        `}
      >
        {previousText}
      </BaseButton>
      
      {showPageNumbers && 
        Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <BaseButton
            key={page}
            onClick={() => onPageChange(page)}
            className={`
              px-4! py-2! min-w-10!
              ${page === currentPage
                ? "bg-black! text-white! font-semibold"
                : "bg-transparent! text-black! hover:bg-black! hover:text-white!"
              }
            `}
          >
            {page}
          </BaseButton>
        ))
      }
      
      <BaseButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`
          px-4 py-2! bg-transparent! text-black!
          hover:bg-black! hover:text-white!
          ${currentPage === totalPages ? "hidden" : ""}
        `}
      >
        {nextText}
      </BaseButton>
    </div>
  );
}