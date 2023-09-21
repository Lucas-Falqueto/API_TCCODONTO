import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from "dotenv"
dotenv.config()

const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.HOST_DB,
    port: parseInt(process.env.PORT_DB),
    username: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DB,
    synchronize: true, //lembrar de remover
    // logging: true,
    entities: [__dirname +"/entities/**/*.ts"],
    migrations: [__dirname +"/migrations/**/*.ts"],
})

export default AppDataSource
