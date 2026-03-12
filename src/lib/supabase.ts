// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

// 从环境变量中读取 Supabase 配置
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://wgyyxzrnzcxsqtsjbihf.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndneXl4enJuemN4eHF0c2piaWhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3ODg5NTAsImV4cCI6MjA4ODM2NDk1MH0.8yOZcqCbaGwF-I9_cHPutjgSbiOodLYxCwHJhFIWYDE';

console.log('SUPABASE_CONFIG: Using URL:', supabaseUrl);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
