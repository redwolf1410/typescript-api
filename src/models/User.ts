import mongoose , {Schema, model } from 'mongoose';

export interface User extends mongoose.Document{
    email: String,
    username : String, 
    password : String
} 
const UserSchema = new Schema({
    email: {type: String, required:[true]},
    username: {type: String, required:[true]},
    password: {type: String, required:[true]}
})

export default model<User>('User',UserSchema) 