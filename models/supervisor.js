import mongoose from "mongoose";
import { Schema, model} from "mongoose";

const supervisorSchema = new Schema({
    nombreCompleto: String,
    email: {
        type: "string",
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        index: { unique: true},
    },
    telefono: String,
    recuperado: String,
    periodoRecuperado:String
});

export const Supervisor = model('Supervisor', supervisorSchema);