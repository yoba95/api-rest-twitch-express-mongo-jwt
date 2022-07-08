import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const { Schema, model } = mongoose;

const userSchema = new Schema({
    email: {
        type: "string",
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        index: { unique: true},
    },
    password: {
        type: "string",
        required: true,
    }
});

//metodo para hashear la contraseña
userSchema.pre("save", async function(next){
    const user = this

    if (!user.isModified('password')) return next();

   try {
    const salto =  await bcryptjs.genSalt(10);
    //userSchema.password = await bcryptjs.hash(user.password, salto);
    user.password = await bcryptjs.hash(user.password, salto);
    next();
   } catch (error) {
    console.log(error)
    throw new Error ("fallo el hash de contraseña")
   } 
});

//metodo para comparar la contraseña de mongodb con la del usuario que ingrese en el login
userSchema.methods.comparePassword = async function( candidatePassword){
    return await bcryptjs.compare(candidatePassword, this.password);
};


export const User = model("User", userSchema);