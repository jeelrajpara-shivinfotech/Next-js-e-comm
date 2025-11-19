import React from "react";
import BaseInput from "./BaseInput";

export interface BaseFormField {
  label?: string;
  name?: string;
  type?: "text" | "email" | "password" | "number" | "textarea";
  placeholder?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  rightElement?: React.ReactNode;
}

interface BaseFormProps {
  fields?: BaseFormField[];
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  children?: React.ReactNode;
}

const BaseForm: React.FC<BaseFormProps> = ({ fields, onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {fields?.map?.((field, index) => (
        <div key={field?.name ?? index} className="space-y-1">
          {field?.type === "textarea" ? (
            <textarea
              name={field?.name}
              value={field?.value}
              onChange={field?.onChange}
              placeholder={field?.placeholder}
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none flex-1 px-4 py-3 outline-none placeholder:text-black"
              rows={3}
            />
          ) : (
            <BaseInput
              type={field?.type || "text"}
              value={field?.value}
              name={field?.name}
              placeholder={field?.placeholder}
              onChange={field?.onChange}
              rightElement={field?.rightElement}
              className="w-full bg-transparent text-black placeholder:text-black px-0"
              withBackground={false}
            />
          )}
        </div>
      ))}
      {children}
    </form>
  );
};
export default BaseForm;