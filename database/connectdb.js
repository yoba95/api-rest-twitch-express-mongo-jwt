import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.URI_MONGO)
    console.log('Connect DB ok funciona a nueva��')
} catch (error) {
    console.log('Error de conexion a mongoDB:' + error)
}

