import express from 'express';
import config from './config/config.js';
import connect from './db/connect.js';
import router from './routes/index.js';
const port = config.port;
const app = express();
connect;
app.use(express.json())
app.use(router)

export { app, port };
