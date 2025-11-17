-- Supabase Database Setup for Omar Naifar Portfolio
-- Run this SQL in your Supabase SQL Editor

-- Create contact_leads table
CREATE TABLE IF NOT EXISTS contact_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  budget TEXT NOT NULL,
  message TEXT NOT NULL,
  preferred_start_date TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_contact_leads_email ON contact_leads(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_contact_leads_created_at ON contact_leads(created_at DESC);

-- Enable Row Level Security
ALTER TABLE contact_leads ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow service role to insert" ON contact_leads;
DROP POLICY IF EXISTS "Allow service role to select" ON contact_leads;
DROP POLICY IF EXISTS "Allow service role to update" ON contact_leads;
DROP POLICY IF EXISTS "Allow service role to delete" ON contact_leads;

-- Create policy to allow service role to insert
CREATE POLICY "Allow service role to insert"
  ON contact_leads
  FOR INSERT
  TO service_role
  WITH CHECK (true);

-- Create policy to allow service role to select
CREATE POLICY "Allow service role to select"
  ON contact_leads
  FOR SELECT
  TO service_role
  USING (true);

-- Create policy to allow service role to update
CREATE POLICY "Allow service role to update"
  ON contact_leads
  FOR UPDATE
  TO service_role
  USING (true);

-- Create policy to allow service role to delete
CREATE POLICY "Allow service role to delete"
  ON contact_leads
  FOR DELETE
  TO service_role
  USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_contact_leads_updated_at ON contact_leads;
CREATE TRIGGER update_contact_leads_updated_at
  BEFORE UPDATE ON contact_leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Optional: Create a view for admin dashboard (if needed later)
CREATE OR REPLACE VIEW contact_leads_summary AS
SELECT 
  id,
  name,
  email,
  company,
  budget,
  LEFT(message, 100) as message_preview,
  preferred_start_date,
  created_at
FROM contact_leads
ORDER BY created_at DESC;

-- Grant permissions on the view
GRANT SELECT ON contact_leads_summary TO service_role;

COMMENT ON TABLE contact_leads IS 'Stores contact form submissions from the portfolio website';
COMMENT ON COLUMN contact_leads.name IS 'Contact person full name';
COMMENT ON COLUMN contact_leads.email IS 'Contact person email address';
COMMENT ON COLUMN contact_leads.company IS 'Company name (optional)';
COMMENT ON COLUMN contact_leads.budget IS 'Project budget range';
COMMENT ON COLUMN contact_leads.message IS 'Contact message/inquiry';
COMMENT ON COLUMN contact_leads.preferred_start_date IS 'Preferred project start date (optional)';
