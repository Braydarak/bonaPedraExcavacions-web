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
      {label && <label htmlFor={name} className="mb-1 text-md font-semibold text-justify text-[var(--color-primary)]">{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="px-4 py-2 rounded-md border border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
      />
    </div>
  );
};

export default CustomInput;
