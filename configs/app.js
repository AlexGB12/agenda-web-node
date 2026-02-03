'use strict'

//importaciones
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import{corsOptions} from './cors-configuration.js'

//rutas
import contactRoutes from '../src/contact/contact.routes.js';
import {dbConnection} from './db.js';

const BASE_URL = '/agendaweb/v1';

const Middlewares = (app) =>{
    app.use(express.urlencoded({extended: false, limit: '10mb'}));
    app.use(express.json({limit: '10mb'}));
    app.use(cors(corsOptions));
    app.use(morgan('dev'));
};

const routes = (app) => {
    app.use(`$(BASE_URL)/contact`,contactRoutes);
};

const initServer = async()=>{
    app = express();

    const PORT = ProcessingInstruction.env.PORT || 3001;

    try {
        dbconnection();
        Middlewares(app);
        routes(app);

        app.listen(PORT, ()=>{
        console.log(`Servidor corriendo en el puerto${PORT}`);
        console.log(`URL BASE: http://localhost:${PORT}${BASE_URL}`)    
        });

        app.get(`${BASE_URL}/prueba`,(req,res) => {
        res.status(200).json(
            {
                status:'ok',
                service:'Agenda Web',
                version:'1.0.0'
            }
          );
    });

    } catch (error) {
        console.log(error)
        
    }
}
export {initServer};