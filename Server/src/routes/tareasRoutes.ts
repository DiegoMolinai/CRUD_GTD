import { Router } from 'express';

class TareasRoutes {
    public router: Router = Router();
    constructor(){
        this.config();


    }

    config():void{
        this.router.get('/',(req,res)=> res.send("Tareas"))
    }
}

const tareasRoutes = new TareasRoutes();
export default tareasRoutes.router;