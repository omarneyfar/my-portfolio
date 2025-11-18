'use client';

import { useState } from 'react';
import { useTranslation } from '@/lib/i18n';

type FormState = {
  email: string;
  isSubmitting: boolean;
  error: string | null;
  success: boolean;
};

export default function CvDownloadForm() {
  const { t } = useTranslation();
  const [state, setState] = useState<FormState>({
    email: '',
    isSubmitting: false,
    error: null,
    success: false,
  });

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset state
    setState(prev => ({ ...prev, error: null, success: false }));
    
    // Validate email
    if (!validateEmail(state.email)) {
      setState(prev => ({ ...prev, error: 'Please enter a valid email address' }));
      return;
    }
    
    try {
      setState(prev => ({ ...prev, isSubmitting: true }));
      
      // Call the API
      const response = await fetch('/api/cv-download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: state.email }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to download CV');
      }
      
      // Get the blob and create a download link
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `CV_${new Date().toISOString().split('T')[0]}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
      
      setState(prev => ({
        ...prev,
        isSubmitting: false,
        success: true,
        email: '',
      }));
      
    } catch (error) {
      console.error('Error downloading CV:', error);
      setState(prev => ({
        ...prev,
        isSubmitting: false,
        error: error instanceof Error ? error.message : 'An error occurred',
      }));
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        {t('cv.downloadTitle', 'Download My CV')}
      </h2>
      
      {state.error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {state.error}
        </div>
      )}
      
      {state.success ? (
        <div className="p-4 bg-green-100 text-green-700 rounded-md">
          {t('cv.downloadSuccess', 'CV downloaded successfully! Check your email for a copy.')}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t('form.emailLabel', 'Email Address')}
            </label>
            <input
              type="email"
              id="email"
              value={state.email}
              onChange={(e) => setState(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder={t('form.emailPlaceholder', 'your@email.com')}
              required
              disabled={state.isSubmitting}
            />
          </div>
          
          <button
            type="submit"
            disabled={state.isSubmitting}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${state.isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {state.isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {t('form.downloading', 'Downloading...')}
              </>
            ) : (
              <>
                <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {t('cv.downloadButton', 'Download CV')}
              </>
            )}
          </button>
          
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            {t('form.privacyNotice', 'Your email will only be used to send you a copy of the CV.')}
          </p>
        </form>
      )}
    </div>
  );
}
