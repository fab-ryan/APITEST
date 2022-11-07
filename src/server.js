import express from 'express';
import config from './config/config.js';
import connect from './db/connect.js';
import router from './routes/index.js';
import swagger from 'swagger-ui-express';
import { createRequire } from 'module';
import cors from 'cors';
const require = createRequire(import.meta.url);

const port = config.port;
const Documentation = require('../documentation.json');
const app = express();
app.use(cors());
connect;
app.use(express.json());
app.use('/api', router);
app.use(
  '/api-docs',
  swagger.serve,
  swagger.setup(Documentation)
);
export { app, port };
