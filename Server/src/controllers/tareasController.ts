import { Request, Response } from 'express';

import pool from '../database';


class TareasController{
    
    public index (req: Request, res: Response) {
        pool.query('DESCRIBE tareas');
        res.json('hola diego');
    }

    public create (req: Request, res: Response){
        res.json({text: 'creando una tarea'});
    }



}

const tareasController = new TareasController();
export default tareasController;