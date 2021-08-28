import mongoose from 'mongoose';
import { mongodb } from './keys';
const mongoUserName = "dani";
const mongoPassword = "pass";
const mongoHost = "localhost";
const mongoPort = "27017";
const mongoDatabase = "iotgl"; 

var uri =
  "mongodb://" +
  mongoUserName +
  ":" +
  mongoPassword +
  "@" +
  mongoHost +
  ":" +
  mongoPort +
  "/" +
  mongoDatabase;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: "admin"
  };
mongoose.connect(uri,options) 
    .then(db => console.log('Db is connected'))
    .catch(err =>console.log(err)); 