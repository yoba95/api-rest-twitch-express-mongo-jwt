import jwt from "jsonwebtoken"
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

       const TokenVerificationErrors = {
        "invalid signature": "la firma del JWT no es valida",
        "jwt expired": "JWT expirado",
        "invalid token": "Token no valido",
        "No Bearer": "Utiliza formato Bearer",
        "jwt malformed": "JWT formato no valido",
       }

       return res
       .status(401)
       .send({ error: TokenVerificationErrors[error.message] });
    }
}