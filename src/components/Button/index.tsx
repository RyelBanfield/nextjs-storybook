import React from 'react';

type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  label: string;
};

const sizes = {
  small: 'text-xs py-1 px-2',
  medium: 'text-base py-2 px-4',
  large: 'text-lg py-3 px-6',
};

const Button = ({
  size = 'medium', label, ...props
}: ButtonProps) => {
  const sizeClasses = sizes[size];

  return (
    <button
      type="button"
      className={`font-bold rounded cursor-pointer bg-red-900 text-white ${sizeClasses}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
