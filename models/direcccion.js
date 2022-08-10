import mongoose from "mongoose";
import{Schema, model} from "mongoose";

const directorSchema = new Schema({
    nombreCompleto: String,
    sindicato:String,
    telefono:String,
    puesto:String,
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        index: { unique: true},
    },
    supervisor:{
       type: Schema.Types.ObjectId,
       ref:"Supervisor",
       required:true 
    }
})