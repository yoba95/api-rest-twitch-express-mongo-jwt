import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const regionSchema = new Schema({
    //identificador propio de mongoose
   // _id: mongoose.Schema.Types.ObjectId,
    localidad: {
        type: Schema.Types.ObjectId,
        ref:"Localidad",
        required:true
    },
    nombre: String
});

export const Region = model('Region' ,regionSchema);