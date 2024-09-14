import express from 'express';
import operationsRoutes from './routes/operations.routes.js';
import criptoRoutes from './routes/cripto.routes.js';
import holdingsRoutes from './routes/holdings.routes.js';
import usersRoutes from './routes/user.routes.js';
const app = express();

// middlewares
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

app.use(operationsRoutes);
app.use(criptoRoutes);
app.use(holdingsRoutes);
app.use(usersRoutes);

export default app;