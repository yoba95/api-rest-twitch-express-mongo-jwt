//metodo de prueba para hacer los 4 metodos del CRUD
import jwt from "jsonwebtoken";

export const generateToken = (uid) =>{

    const expiresIn = 60*15;

    try {
        const token = jwt.sign({uid}, process.env.JWT_SECRET, {expiresIn});
        return {token, expiresIn}
    } catch (error) {
        console.log(error);
    }
}

export const generateRefreshToken = (uid, res) =>{
    const expiresIn = 60 * 60 * 24 * 30;
    try {
        const refreshToken = jwt.sign({uid}, process.env.JWT_REFRESH, {expiresIn,});
          res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure:!(process.env.MODO === "developer"), 
            expires: new Date(Date.now()+expiresIn * 1000),
        });
    } catch (error) {
        console.log(error);
    }
}


//
export const errorValidateTokwn = (error) =>{
    switch (error) {
        case "invalid signature":
            return "firma no valida";
        case "jwt expired":
            return "JWT expirado";
        case "invalid token":
            return "Token no valido";
        default:
            return error;
    }
}