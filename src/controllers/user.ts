import { Application, Request, Response } from "express";

import CoursesData from "../../data/courses.json";

export const loadUserEndpoints = (app: Application): void => {
  app.get("/api", (req: Request, res: Response) => {
    return res.status(200).send("Hola");
  });
  app.get("/api2", (req: Request, res: Response) => {
    return res.status(200).send("Wenos dias");
  });
};
