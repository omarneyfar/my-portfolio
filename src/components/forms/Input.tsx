import { InputHTMLAttributes, forwardRef } from 'react';
import { FormField } from './FormField';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  wrapperClassName?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  id,
  name = id,
  error,
  required,
  className = '',
  wrapperClassName = '',
  ...props
}, ref) => {
  return (
    <FormField
      label={label}
      name={name}
      error={error}
      required={required}
      className={wrapperClassName}
    >
      <input
        id={id}
        name={name}
        ref={ref}
        className={`w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${className}`}
        {...props}
      />
    </FormField>
  );
});

Input.displayName = 'Input';
