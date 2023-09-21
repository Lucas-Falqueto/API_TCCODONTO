import { startSeeds } from "../seeds/seeds"
import  AppDataSource from "./../data-source"

export const createConnectionDB = async ()=>{
    const connection = await AppDataSource.initialize()
    
    //inserindo dados teste
    startSeeds()

    console.log(`App conectado ao BD ${connection.options.database}`)
    process.on('SIGINT', ()=>{
        connection.destroy().then(()=>console.log('Conexão com BD fechada'))
    })
}