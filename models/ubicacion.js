import mongoose from "mongoose";
import {Schema, model} from "mongoose";

const ubicacionSchema = new Schema({
    calle: String,
    numExterior: Number,
    numInterior: Number,
    codigoPostal: Number,
    asentamientoColonia: String
});

export const Ubicacion = model ('Ubicacion', ubicacionSchema);