import mongoose , {Schema, model } from 'mongoose';

export interface Device extends mongoose.Document{
    id : String,
    name : String,
    location : String
}
const DeviceSchema = new Schema({
    id: String,
    name: String,
    location : String
})

export default model<Device>('Device',DeviceSchema) 