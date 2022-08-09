import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const personalSchema = new Schema({
    //identificador propio de mongoose
   // _id: mongoose.Schema.Types.ObjectId,
    nombreCompleto:String,
     email: {
        type: "string",
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        index: { unique: true},
    },
    nombreOficina:String
});

export const Personal = model('Personal' ,personalSchema);