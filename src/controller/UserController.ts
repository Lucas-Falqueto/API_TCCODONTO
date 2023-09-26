import AppDataSource from "../data-source";
import { Dentist } from "../entities/Dentist";
import * as bcrypt from "bcrypt";

export class UserController {
  async save(user) {
    const userTable = AppDataSource.getRepository(Dentist);
    const newUser: Dentist = user;
    return await userTable.save(newUser);
  }

  // async getUsers() {
  //     const users = AppDataSource.manager.find(User)
  //     return users
  // }

  async getUserEmail(email) {
    const user = await AppDataSource.manager.findOneBy(Dentist, {
      email: email,
    });
    return user;
  }

  async getUser(email) {
    const user = await AppDataSource.manager.findOneBy(Dentist, {
      email: email,
    });

    return user;
  }

  // async listReleaseUser(id: number) {
  //     const user = await AppDataSource.manager.findOne(User, { where: { id: id }, relations: ['release'] })
  //     return user.release;
  // }
}
