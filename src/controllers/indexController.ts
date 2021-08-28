import { Request, Response } from 'express';


class IndexController{
    public index (req: Request, res: Response){
        res.render('index',{title:'Wellcome to the Devices App'});
      }
}

export const indexController: IndexController = new IndexController();


