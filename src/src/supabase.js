import { createClient } from '@supabase/supabase-js';
const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL || 'https://fpngyfdpjumahkhicwzm.supabase.co';
const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwbmd5ZmRwanVtYWhraGljd3ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE1NTYzNDYsImV4cCI6MjA5NzEzMjM0Nn0.L8V9YX_PmDP6GZwEdIxv9lEAG8VOde3ER8ePDiHibaM';
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
