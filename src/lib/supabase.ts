import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactFormSubmission {
  name: string;
  email: string;
  budget?: string;
  message: string;
  created_at?: string;
}

export const submitContactForm = async (data: ContactFormSubmission) => {
  try {
    const { error } = await supabase
      .from('contact_submissions')
      .insert([data]);

    if (error) {
      throw error;
    }

    return { success: true };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};
