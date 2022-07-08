import { Router } from "express";
import { infoUser, login, register, refreshToken, logout } from "../controllers/auth.controller.js";
import { requireToken } from "../middlewares/requireToken.js";
import { requireRefreshToken } from "../middlewares/requireRefreshToken.js";
import { bodyLoginValidator, bodyRegisterValidator } from "../middlewares/validatorManager.js";

const router = Router();

router.post('/register',bodyRegisterValidator,register);

router.post('/login',bodyLoginValidator,login);

     //metodo de prueba para hacer los 4 metodos del CRUD
     router.get("/protected", requireToken, infoUser);
     router.get("/refresh",requireRefreshToken, refreshToken)
     router.get("/logout", logout);
     //

export default router;