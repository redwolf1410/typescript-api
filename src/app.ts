import express from "express";
import path from "path";

import morgan from 'morgan';
import cors from 'cors';
import exphbs from "express-handlebars";
import IndexRoutes from './routes/index'
import DeviceRoutes from './routes/device'
// Create Express server
const app = express();
import './database';

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(express.json());

app.set('views',path.join(__dirname,'views'))
app.engine('.hbs', exphbs({
  extname: '.hbs',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials') 
}));
app.set('view engine', '.hbs')

//Middlewares
app.use(morgan("tiny"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/devices',DeviceRoutes)
app.use(IndexRoutes)
// static files
app.use(
  express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 })
);



export default app;
