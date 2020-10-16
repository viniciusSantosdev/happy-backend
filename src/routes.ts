import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);
    
export default routes;

// {
// 	"name": "Lar das meninas",
// 	"latitude": -21.6124641,
// 	"longitude": -48.3645577,
// 	"about": "Sobre o orfanato",
// 	"instructions": "Venha visitar",
// 	"opening_hours": "Das 8h até 18h",
// 	"open_on_weekends":  true
// }