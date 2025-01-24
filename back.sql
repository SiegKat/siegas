CREATE TABLE user_reports (
  id SERIAL PRIMARY KEY,
  phone_number VARCHAR(20),
  reported_name VARCHAR(100),
  is_spam BOOLEAN,
  created_at TIMESTAMP
); 