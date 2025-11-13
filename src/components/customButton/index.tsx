// src/components/CustomButton.tsx
import React from 'react';
import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
};

const CustomButton: React.FC<Props> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
}) => {
  const baseStyle = 'rounded-lg font-medium transition cursor-pointer';

  const sizeStyles = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4',
    xl: 'text-xl px-10 py-5',
  };

  const variantStyles = {
    primary: 'bg-[var(--color-primary)] text-[var(--color-base)] hover:opacity-90',
    secondary: 'bg-[var(--color-secondary)] text-black hover:opacity-90',
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(baseStyle, sizeStyles[size], variantStyles[variant], className)}
    >
      {children}
    </button>
  );
};

export default CustomButton;
