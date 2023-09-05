import UserRepository from "./userRepository";

export default class UserService {
  private repository: any;

  constructor() {
    this.repository = new UserRepository();
  }

  async getUsers() {
    const users = await this.repository.getUsers();
    return users;
  }
}