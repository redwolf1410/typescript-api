import { tsBooleanKeyword } from "@babel/types";
import { Application, Request, Response } from "express";
import CoursesData from "../../data/courses.json";
import DeviceModel,  {Device} from "../models/Devices";
class DeviceController{
  public async index(req: Request, res: Response): Promise<void> {
    const devices: Device[] = await DeviceModel.find({});
    res.render('devices/index', { 
        title: 'Device',
        devices
    }); 
}

    public renderFormDevice(req: Request, res: Response) {
      res.render('devices/add', {
          title: 'Add A Device'
      });
  }
    public async saveDevice (req: Request, res: Response){
      const {id, name, location} = req.body;
      const device: Device = new DeviceModel({
        id,
        name, 
        location});
      await device.save();
      res.status(200)
      .send("Device added");
    };

}
export const deviceController = new DeviceController();
