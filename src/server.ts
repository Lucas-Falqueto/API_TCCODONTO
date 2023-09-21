import { app } from './app'
import AppDataSource from './data-source'
const PORT = 3001
const server = app.listen(PORT, () => console.log(`App rodando http://locahost:${PORT}`))

process.on(
    'SIGINT',
    () => {
        server.close()
        console.log("App finalizado")
    }
)