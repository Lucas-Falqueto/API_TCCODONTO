import { validate } from "class-validator";
import { Router } from "express";
import { UserController } from "../controller/UserController";
import { Dentist } from "../entities/Dentist";
// import { User } from "../entity/Person"
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export const routerUser = Router();
const userCtrl = new UserController();

//Salvar novo Usuario
routerUser.post("/register", async (req, res) => {
  const { siape, email, name, crm, password } = req.body;
  // console.log(siape, email, name, crm, password);
  if (
    siape === "" ||
    email === "" ||
    name === "" ||
    crm === "" ||
    password === ""
  ) {
    return res
      .status(404)
      .json({ error: "Insira todos os campos corretamente" });
  }
  const userEmail = await userCtrl.getUserEmail(email);
  // console.log(userEmail);
  if (userEmail) return res.status(404).json({ error: "Email ja existe" });

  const user = new Dentist();
  user.crm = crm;
  user.email = email;
  user.name = name;
  user.siape = siape;
  user.password = await bcrypt.hash(password, 8);

  const errors = await validate(user);
  if (errors.length > 0) {
    return res
      .status(404)
      .json({ error: "firstname or email cannot be empty" });
  } else {
    const userSaved = await userCtrl.save(user);
    res.status(201).json(userSaved);
  }
});

//login
routerUser.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;

  if (email === "" || password === "") {
    return res.status(404).json({
      status: "failed",
      login: false,
      error: "Insira todos os campos corretamente",
    });
  }

  const user = await userCtrl.getUser(email);
  if (!user) {
    return res
      .status(404)
      .json({ status: "failed", login: false, error: "Email não encontrado" });
  }
  if (!(await bcrypt.compare(password, user.password))) {
    return res
      .status(404)
      .json({ status: "failed", login: false, error: "Senha incorreta" });
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
  return res.status(200).json({
    token: token,
  });
});

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
