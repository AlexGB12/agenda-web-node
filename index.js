process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

//importaciones

import dotenv from 'dotenv';
import {initServer} from './configs/app.js';

dotenv.config();

process.on('uncaughtException', (error) => {
    console.log(error)
    process.exit(1);
});

process.on('unhandledRejection',(reason,promise)=>{
    console.log(reason.promise);
    process.exit(1);
});

//iniciar servidor
console.log('iniciando el servidor de agenwda web');
initServer();