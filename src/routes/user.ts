import { Router, Request, Response } from "express";
import  { userController } from '../controllers/usersController';
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

class UserRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', userController.index);
        this.router.get('/add', userController.renderFormDevice);
        this.router.post('/add', userController.saveUser);
    }

}
const userRoutes = new UserRoutes();
export default userRoutes.router;