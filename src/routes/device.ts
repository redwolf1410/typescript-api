import { Router, Request, Response } from "express";
import  { deviceController } from '../controllers/devicesController';


class DeviceRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', deviceController.index);
        this.router.get('/add', deviceController.renderFormDevice);
        this.router.post('/add', deviceController.saveDevice);
    }

}
const devicesRoutes = new DeviceRoutes();
export default devicesRoutes.router;