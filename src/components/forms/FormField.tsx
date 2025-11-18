import { ReactNode } from 'react';
import { useTranslation } from '@/lib/i18n';

type FormFieldProps = {
  label: string;
  name: string;
  children: ReactNode;
  error?: string;
  required?: boolean;
  className?: string;
};

export function FormField({
  label,
  name,
  children,
  error,
  required = false,
  className = '',
}: FormFieldProps) {
  const { t } = useTranslation();
  
  return (
    <div className={`mb-4 ${className}`}>
      <label 
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      >
        {t(label, { defaultValue: label })}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {children}
      
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
          {t(error, { defaultValue: error })}
        </p>
      )}
    </div>
  );
}
