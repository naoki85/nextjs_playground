/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import cors from "cors";

import indexRouter from './routes/index'
import tokenVerificationRouter from './routes/tokenVerification'
import signupRouter from './routes/signup'
import loginRouter from './routes/login'
import logoutRouter from './routes/logout'
import homeRouter from './routes/home'

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
const corsOptions: cors.CorsOptions = {
  origin: "http://localhost:4200",
  credentials: true,
}
app.use(cors(corsOptions));

// app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/api/', indexRouter);
app.use("/api/tokenVerification", tokenVerificationRouter);
app.use('/api/signup', signupRouter);
app.use('/api/login', loginRouter);
app.use('/api/logout', logoutRouter);
app.use('/api/home', homeRouter);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
