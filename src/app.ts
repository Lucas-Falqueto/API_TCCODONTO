import * as express from "express";
import * as bodyPaser from "body-parser";
import * as cors from "cors";
import * as logger from "morgan";

import { createConnectionDB } from "./config/db";
import { routerUser } from "./route/user";
// import { routerRelease } from './route/release'
import * as dotenv from "dotenv";
import { validate } from "./route/auth";
import { routerStudent } from "./route/student";
dotenv.config();
//Criando aplicação
export const app = express();

// liberando acesso
app.use(cors());

// config para receber JSON
app.use(bodyPaser.json());

// logs do sistema
app.use(logger("dev"));

// conexão com banco de dados
createConnectionDB();

//Config rotas
app.use("/user", routerUser);
app.use("/registerStudent", routerStudent);
app.use(validate);
// app.use('/', (req, res) => res.send('Api TS'))

// app.use('/release', routerRelease)
