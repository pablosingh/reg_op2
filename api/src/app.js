import express from 'express';
import operationsRoutes from './routes/operations.routes.js';
import criptoRoutes from './routes/cripto.routes.js';
import holdingsRoutes from './routes/holdings.routes.js';

const app = express();

// middlewares
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

app.use(operationsRoutes);
app.use(criptoRoutes);
app.use(holdingsRoutes);

export default app;