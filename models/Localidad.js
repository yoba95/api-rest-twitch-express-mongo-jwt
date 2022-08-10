import mongoose from "mongoose";
import { Schema, model} from "mongoose";

const localidadSchema = new Schema({
    nombreLocalidad: String,
    nombreMunicipio: String,
    longitud: Decimal128,
    latitud: Decimal128,
    claveInegi: Number
});

export const Localidad = model ('Localidad', localidadSchema);