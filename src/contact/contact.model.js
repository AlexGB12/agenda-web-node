'use strict';

import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    conactName:{
        type: String,
        requiered: true,
        trim: true,
        MaxLength:[100,'el numero del contacto no puede exceder los 100 caracteres']
    },
    contactNumber:{
        type: String,
        requiered:true,
        trim:true,
        maxLength:[11,'el telefono no puede exceder los 11 caracteres']       
    },
    photo:{
        type:String,
        default:'contact/agenda_web_nyvxo5'
    },
    })

    contactSchema.index({conactName:1});
    contactSchema.index({contactNumber:1});

    export default mongoose.model('Contact', contactSchema);