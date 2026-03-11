// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

// 复制下面的内容替换原来的占位符
const supabaseUrl = 'https://wgyyxzrnzcxsqtsjbihf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndneXl4enJuemN4eHF0c2piaWhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3ODg5NTAsImV4cCI6MjA4ODM2NDk1MH0.8yOZcqCbaGwF-I9_cHPutjgSbiOodLYxCwHJhFIWYDE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
