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

export const getEscuela = async (req, res) =>{
   try {
        const {id} = req.params
        const escuela = await Escuela.findById(id);

        //const link = await Link.findById(id);
        if (!escuela) return res.status(404).json({error: "No existe la escuela"});

        if (!escuela.uid.equals(req.uid)) return res.status(401).json({error: "No le pertence esa escuela"});

        return res.json({link});
    } catch (error) {
        console.log(error);
        if (error.kind === "ObjectId") {
            return res.status(403).json({error: "Formato id incorrecto"});
        }
        return res.status(500).json({error: "error del servidor"});
    }
}

export const createEscuela = async (req, res )=> {
    try {
        
    } catch (error) {
       console.log(error);
        
    }
       
}
