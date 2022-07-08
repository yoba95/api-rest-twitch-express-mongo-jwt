import jwt from "jsonwebtoken"
import { tokenVerificationErrors } from "../utils/tokenManager.js";
//metodo de prueba para hacer los 4 metodos del CRUD
export const requireToken = (req, res, next) =>{

    try {
        
        //console.log(req.headers);
        let token = req.headers?.authorization;

        if (!token) 
            throw new Error('no existe el token en el header usa Bearer');
        
        token = token.split(" ")[1];
        const {uid} = jwt.verify(token, process.env.JWT_SECRET);
       // console.log(payload);
       req.uid = uid;
        next();

    } catch (error) {
       console.log(error);
       return res
       .status(401)
       .send({ error: tokenVerificationErrors[error.message] });
    }
}