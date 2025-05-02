import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://vzoolvnmavheqojgldbv.supabase.co', // Your Supabase URL
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6b29sdm5tYXZoZXFvamdsZGJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxNTY2NDEsImV4cCI6MjA2MTczMjY0MX0.pJZTLvfFO4koAEdLzAbxLEcv2FrTmif4pD62f9VF864' // Your Supabase anon key
);

export default supabase;
