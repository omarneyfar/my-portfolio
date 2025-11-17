import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server-side client with service role key (for API routes only)
export const getServerSupabase = () => {
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(supabaseUrl, supabaseServiceKey);
};

// Types for contact form
export interface ContactLead {
  id?: string;
  name: string;
  email: string;
  company?: string;
  budget: string;
  message: string;
  preferred_start_date?: string;
  created_at?: string;
}

// Initialize contact leads table (run once)
export async function initContactLeadsTable() {
  const serverSupabase = getServerSupabase();
  
  // Create table if it doesn't exist
  const { error } = await serverSupabase.rpc('create_contact_leads_table', {
    sql: `
      CREATE TABLE IF NOT EXISTS contact_leads (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        company TEXT,
        budget TEXT NOT NULL,
        message TEXT NOT NULL,
        preferred_start_date TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `
  });

  if (error) {
    console.error('Error creating contact_leads table:', error);
  }
}
