import { tsBooleanKeyword } from "@babel/types";
import { Application, Request, Response } from "express";
import CoursesData from "../../data/courses.json";
import UserModel,  {User} from "../models/User";
class UserController{
  public async index(req: Request, res: Response): Promise<void> {
    const user: User[] = await UserModel.find({}).lean();
    res.render('users/index', {  
        title: 'User',
        user
    });  
}

    public renderFormDevice(req: Request, res: Response) {
      res.render('users/add', { 
          title: 'Add A User'
      });
  }
    public async saveUser (req: Request, res: Response){
      const {email, username, password} = req.body;
      console.log(email, username,password)
      const user: User = new UserModel({
        email,
        username, 
        password});
      await user.save();
      res.status(200)
      .redirect("/users");
    };

}
export const userController = new UserController();
