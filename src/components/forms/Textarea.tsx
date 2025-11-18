import { TextareaHTMLAttributes, forwardRef } from 'react';
import { FormField } from './FormField';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
  wrapperClassName?: string;
  id?: string;
  name?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  label,
  id,
  name = id || '',
  error,
  required,
  className = '',
  wrapperClassName = '',
  rows = 4,
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
      <textarea
        id={id}
        name={name}
        ref={ref}
        rows={rows}
        className={`w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${className}`}
        {...props}
      />
    </FormField>
  );
});

Textarea.displayName = 'Textarea';
