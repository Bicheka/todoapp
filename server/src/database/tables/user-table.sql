CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE,
  username TEXT UNIQUE,
  password_hash TEXT,         -- null if user registered with Google only
  google_id TEXT UNIQUE,      -- store Google sub or id
  github_id TEXT UNIQUE,
  linkedin_id TEXT UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);