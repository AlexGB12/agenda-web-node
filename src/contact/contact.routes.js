//importa las dependencias

import { Router } from "express";
import{getContact,createContact} from "./contact.controller.js";
import{validateCreateContact} from '../..middlewares/contact-validators.js';
import{uploadContactImage} from "../..middlewares/contact-uploader.js";

const router = Router

//rutas get 
router.get('/',getContact);

//rutas post 
router.post('/',uploadContactImage.single('image'),validateCreateContact,createContact);

//rutas put

//rutas delete

export default router;