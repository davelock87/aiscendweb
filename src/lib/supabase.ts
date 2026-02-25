import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseKey);

export const getSEOData = async (path: string) => {
  const { data, error } = await supabase
    .from('seo_pages')
    .select('*')
    .eq('path', path)
    .maybeSingle();

  if (error) {
    console.error('Error fetching SEO data:', error);
    return null;
  }

  return data;
};

export const getRedirects = async (fromPath: string) => {
  const { data, error } = await supabase
    .from('seo_redirects')
    .select('*')
    .eq('from_path', fromPath)
    .eq('active', true)
    .maybeSingle();

  if (error) {
    console.error('Error fetching redirect:', error);
    return null;
  }

  return data;
};
