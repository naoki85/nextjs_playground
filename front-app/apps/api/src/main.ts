/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import { PrismaClient } from '@prisma/client'
import indexRouter from './routes/index'
import tokenVerificationRouter from './routes/tokenVerification'
import signupRouter from './routes/signup'
import loginRouter from './routes/login'
import homeRouter from './routes/home'

const app = express();
const prisma = new PrismaClient();

// app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/', indexRouter);
app.use("/tokenVerification", tokenVerificationRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/home', homeRouter);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
