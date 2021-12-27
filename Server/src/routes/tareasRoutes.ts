import { Router } from 'express';

import tareasController  from '../controllers/tareasController';

class TareasRoutes {
    public router: Router = Router();
    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', tareasController.list)
        this.router.get('/:id', tareasController.getOne)
        this.router.post('/', tareasController.create);
        this.router.delete('/:id',tareasController.delete);
        this.router.put('/:id',tareasController.update);
    }
}

const tareasRoutes = new TareasRoutes();
export default tareasRoutes.router;