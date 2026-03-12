// src/lib/supabase.ts
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// 从环境变量中读取 Supabase 配置
const rawSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://wgyyxzrnzcxsqtsjbihf.supabase.co';
const supabaseUrl = rawSupabaseUrl.trim();
const supabaseAnonKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndneXl4enJuemN4eHF0c2piaWhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3ODg5NTAsImV4cCI6MjA4ODM2NDk1MH0.8yOZcqCbaGwF-I9_cHPutjgSbiOodLYxCwHJhFIWYDE').trim();

console.log('SUPABASE_CONFIG: Using URL:', supabaseUrl);
console.log('SUPABASE_CONFIG: URL length:', supabaseUrl.length);
console.log('SUPABASE_CONFIG: URL ends with supabase.co:', supabaseUrl.endsWith('supabase.co'));

let supabase: SupabaseClient;
try {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
  console.log('SUPABASE_CONFIG: Client initialized successfully');
} catch (error) {
  console.error('SUPABASE_CONFIG: Failed to initialize client:', error);
  console.error('SUPABASE_CONFIG: URL length:', supabaseUrl.length);
  console.error('SUPABASE_CONFIG: URL characters:', Array.from(supabaseUrl).map((char, index) => ({ index, char, code: char.charCodeAt(0) })));
  throw error;
}

export { supabase };
