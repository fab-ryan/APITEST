import dotenv from 'dotenv';
dotenv.config();


 const config = {
  port: process.env.PORT || 4000,
  db: process.env.DB_URL,
  password: process.env.DB_PASSWORD,
  secret: process.env.SECRET_KEY,
};
export default config;