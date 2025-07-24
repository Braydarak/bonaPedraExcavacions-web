// src/components/CustomInput.tsx
import React from 'react';

type Props = {
  label?: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
};

const CustomInput: React.FC<Props> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
}) => {
  return (
    <div className="flex flex-col mb-4">
      {label && <label htmlFor={name} className="mb-1 text-sm font-medium text-justify text-[#2E2E2E]">{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2E2E2E]"
      />
    </div>
  );
};

export default CustomInput;
