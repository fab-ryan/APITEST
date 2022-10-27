import mongoose from 'mongoose';
import config from '../config/config.js';
const { db, password } = config;

const db_url = db.replace('<password>', password);
const connect = mongoose
  .connect(db_url, {
    dbName: 'Blog_Porject',
  })
  .then(() => {
    console.log('Database connected 🌎🔥💻🔥');
  })
  .catch((error) => {
    console.log('Database connection failed', error);
  });

export default connect;
