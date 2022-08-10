import mongoose from "mongoose";
import { Schema, model} from "mongoose";

const estatuSchema = new Schema({
    actvio: String,
    inactivo: String
});

export const Estatus = model('Estatus', estatuSchema);