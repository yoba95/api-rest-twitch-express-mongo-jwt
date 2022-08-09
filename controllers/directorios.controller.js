import { nanoid } from "nanoid";
import { Escuela} from "../models/Escuela.js";

export const getEscuelas = async (req, res) => {
    try {
        const escuelas = await Escuela.find({uid: req.uid});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:"Error del servidor"});
    }
}