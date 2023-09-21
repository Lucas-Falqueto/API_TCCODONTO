
// import { User } from "../entity/Person";
// import { AppDataSource } from "./../data-source"

// export class UserController {
//     async save(user: User) {
//         const userTable = AppDataSource.getRepository(User)
//         return await userTable.save(user)
//     }

//     // async getUsers() {
//     //     const users = AppDataSource.manager.find(User)
//     //     return users
//     // }

//     async getUserId(id: number) {
//         const user = await AppDataSource.manager.findOneBy(User, { id: id });
//         return user
//     }

//     // async listReleaseUser(id: number) {
//     //     const user = await AppDataSource.manager.findOne(User, { where: { id: id }, relations: ['release'] })
//     //     return user.release;
//     // }
// }