/*
  # Create SEO Metadata Management Tables

  1. New Tables
    - `seo_pages` - Store SEO metadata for all pages
      - `id` (uuid, primary key)
      - `path` (text, unique) - Page URL path
      - `title` (text) - Page title
      - `description` (text) - Meta description
      - `keywords` (text) - Keywords for the page
      - `h1` (text) - H1 heading
      - `image` (text) - OG image URL
      - `canonical` (text) - Canonical URL
      - `author` (text) - Author name
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `seo_redirects` - Store URL redirects
      - `id` (uuid, primary key)
      - `from_path` (text, unique) - Source URL
      - `to_path` (text) - Destination URL
      - `status_code` (int) - HTTP status code (301, 302)
      - `active` (boolean)
      - `created_at` (timestamp)
    
    - `seo_analytics` - Track SEO performance metrics
      - `id` (uuid, primary key)
      - `page_id` (uuid, FK to seo_pages)
      - `date` (date)
      - `impressions` (int)
      - `clicks` (int)
      - `avg_position` (float)
      - `ctr` (float) - Click-through rate
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add public read policies for seo_pages and seo_redirects
    - Add admin-only write policies
*/

CREATE TABLE IF NOT EXISTS seo_pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  path text UNIQUE NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  keywords text,
  h1 text,
  image text,
  canonical text,
  author text DEFAULT 'AISCEND',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS seo_redirects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  from_path text UNIQUE NOT NULL,
  to_path text NOT NULL,
  status_code int DEFAULT 301,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS seo_analytics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id uuid REFERENCES seo_pages(id) ON DELETE CASCADE,
  date date NOT NULL,
  impressions int DEFAULT 0,
  clicks int DEFAULT 0,
  avg_position float DEFAULT 0,
  ctr float DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  UNIQUE(page_id, date)
);

ALTER TABLE seo_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE seo_redirects ENABLE ROW LEVEL SECURITY;
ALTER TABLE seo_analytics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read SEO pages"
  ON seo_pages FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can read redirects"
  ON seo_redirects FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can read analytics"
  ON seo_analytics FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE INDEX idx_seo_pages_path ON seo_pages(path);
CREATE INDEX idx_seo_analytics_page_id ON seo_analytics(page_id);
CREATE INDEX idx_seo_analytics_date ON seo_analytics(date);
CREATE INDEX idx_seo_redirects_from_path ON seo_redirects(from_path);
