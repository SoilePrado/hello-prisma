import express, { Express, RequestHandler, Request, Response } from 'express';
import UserController from './modules/userController';
import UserService
 from './modules/userService';

export default class App {
  public app: Express;
  private userController: UserController = new UserController(new UserService());

  constructor() {
    this.app = express();
    this.initAuthHeader();
    this.initRoutes();
  }

  private initAuthHeader(): void {
    const accessControl: RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS, PUT, PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  private initRoutes(): void {
    this.app.get('/users', (req: Request, res: Response) => {
      return this.userController.getUsers(req, res);
    });
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  }
}