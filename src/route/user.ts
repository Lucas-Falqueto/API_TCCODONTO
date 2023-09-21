import { validate } from "class-validator"
import { Router } from "express"
// import { UserController } from "../controller/UserController"
// import { User } from "../entity/Person"


export const routerUser = Router()
// const userCtrl = new UserController()

//Salvar novo Usuario
// routerUser.post('/', async (req, res) => {
//     const { firstName, email } = req.body
//     if (firstName === '' || email === '') return res.status(404).json({ "Erro": "firstname or email cannot be empty" })
//     const user = new User(firstName, email)
//     const errors = await validate(user)
//     if (errors.length > 0) {
//         return res.status(404).json({ Erro: "firstname or email cannot be empty" })
//     } else {
//         const userSaved = await userCtrl.save(user)
//         res.status(201).json(userSaved)
//     }
// })

//Lista todos os usuarios
// routerUser.get('/', async (req, res) => {
//     const users = await userCtrl.getUsers()
//     res.json(users)
// })

//Lista laçamentos do user
// routerUser.get('/releases/:idUser', async (req, res) => {
//     const idUser: number = Number(req.params.idUser)
//     if (!Number.isInteger(idUser)) return res.status(404).json({ error: "user not found" })
//     if (await userCtrl.getUserId(idUser)) {
//         const releases = await userCtrl.listReleaseUser(idUser)
//         res.json(releases)
//     } else {
//         res.status(404).json({ error: "user not found" })
//     }
// })