import mongoose , {Schema, model } from 'mongoose';

export interface User extends mongoose.Document{
    user : String,
    password : String
}
const DeviceSchema = new Schema({
    id: String,
    name: String
})

export default model<User>('User',DeviceSchema) 