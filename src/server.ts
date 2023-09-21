import { app } from './app'
const PORT = 3001
const server = app.listen(PORT, () => console.log(`App rodando na porta ${PORT}`))

process.on(
    'SIGINT',
    () => {
        server.close()
        console.log("App finalizado")
    }
)