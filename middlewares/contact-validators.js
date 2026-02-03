import {body} from 'express-validator';
import{ checkValidators} from './check-validators.js';

export const validateCreateContact = [
    body('contactName')
    .trim()
    .notEmpty()
    .withMessage('el nombre del contacto es obligatorio')
    .isLength({min: 2, max:30})
    .withMessage('El nombre del contacto debe tener entre 2 y 30 caracteres'),
    body('contactNumber')
    .trim()
    .notEmpty()
    .withMessage('El numero de contacto es obligatorio'),
    checkValidators
];