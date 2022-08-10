import { Router } from "express";
import { getEscuela, getEscuelas } from "../controllers/directorios.controller.js";

import { requireToken } from "../middlewares/requireToken.js";

const router = Router();
//GET              /api/v1/escuelas                  lista todas las escuela
//Get             /api/v1/escuelas/:id               lista la escuela por id
//POST           /api/v1/escuelas                    crea la escuela
//PATCH/PUT      /api/v1/escuelas/:id                actualiza la escuela
//DELETE         /api/v1/escuelas/:id                remove escuela

router.get("/", requireToken,getEscuelas);
router.get("/:id", requireToken, getEscuela);