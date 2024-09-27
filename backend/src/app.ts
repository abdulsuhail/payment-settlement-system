// src/app.ts
import express from 'express';
import cors from 'cors';
import transactionRoutes from './routes/TransactionRoutes';
import { initDb } from './utils/db';

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use('/transactions', transactionRoutes);

initDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((error) => {
  console.error('Failed to initialize database:', error);
  process.exit(1);
});

export default app;