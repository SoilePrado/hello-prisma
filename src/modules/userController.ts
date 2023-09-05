import { Request, Response } from "express";

export default class UserController {
  private service: any;

  constructor(service: any) {
    this.service = service;
  }

  async getUsers(req: Request, res: Response) {
    const users = await this.service.getUsers();
    return res.status(200).json(users);
  }

  async createUser(req: Request, res: Response) {
    const user = await this.service.createUser(req.body);
    return res.status(201).json(user);
  }
}