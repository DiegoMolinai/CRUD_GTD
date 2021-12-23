import { Router } from 'express';

import tareasController  from '../controllers/tareasController';

class TareasRoutes {
    public router: Router = Router();
    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', tareasController.index)
        this.router.post('/', tareasController.create);
    }
}

const tareasRoutes = new TareasRoutes();
export default tareasRoutes.router;