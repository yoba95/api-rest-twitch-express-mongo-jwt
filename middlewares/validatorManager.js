import axios from "axios";
import { validationResult, body, param } from "express-validator";

export const validationResultExpress = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    next();
}

export const paramLinkValidator = [
    param("id","Formato no valido (expressValidator)").trim().notEmpty().escape(),validationResultExpress,
]

export const bodyLinkValidator = [
    body("longLink", "Formato de link incorecto").trim().notEmpty()
    .custom(async value => {
        try {
            if (!value.startsWith("https://")) {
                value= "https://" + value;
            }
            await axios.get(value);
            return value
        } catch (error) {
           // console.log(error);
             throw new Error('No funt longlink 404')
        }
    })
    ,validationResultExpress
]

export const bodyRegisterValidator = [
        body('email', "Formato incorrecto")
            .trim()
            .isEmail()
            .normalizeEmail(),
        body( 'password', "Minimo 6 caracteres").trim().isLength({ min: 6}),
        body('password', "Formato de password incorrecto").custom( 
            (value, {req}) =>{
                if (value !== req.body.repassword) {
                    throw new Error('No coinciden las contraseñas')
                }
                return value;
            }),
            validationResultExpress
    ];

    export const bodyLoginValidator = [
        body('email', "Formato incorrecto")
            .trim()
            .isEmail()
            .normalizeEmail(),
        body( 'password', "Minimo 6 caracteres").trim().isLength({ min: 6}),
        validationResultExpress
    ];
    
    export const paramDirectorioValidator = [
        param("id", "Formato no valido (expressValidator)").trim().notEmpty().escape(),validationResultExpress
    ];

    export const bodyDirectorioRegisterValidator=[
        body('id_Usuario', "Formato incorrecto")
            .trim()
            .isEmail()
            .normalizeEmail(),
        body( 'telefono', "10 digitos").trim().isLength({ min: 10}),
        validationResultExpress
    ];
    