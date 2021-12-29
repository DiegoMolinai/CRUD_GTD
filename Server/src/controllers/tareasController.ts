import { Request, Response } from 'express';

import pool from '../database';
class TareasController{
    
    public async list (req: Request, res: Response) {
        const tareas = await pool.query('SELECT * FROM tareas');
        res.json(tareas[0]);
    }

    public async getOne(req:Request, res:Response): Promise<any>{
        const {id} = req.params;
        const tareas = await pool.query('SELECT * FROM tareas WHERE id = ?', [id]);
        if (tareas.length > 0) {
            return res.json(tareas[0]);
        }
        res.status(404).json({text:'La tarea no existe'})
    }

    public async create (req: Request, res: Response): Promise<void>{
        const tareacreada = await pool.query('INSERT INTO tareas set ?',[req.body]);
        res.json({message: 'Tarea Guardada'});
    }

    public async delete (req:Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM tareas WHERE id = ?',[id]);
        res.json({text:'Tarea Eliminada'});
    }

    public async update (req:Request, res:Response): Promise<void>{
        const {id} = req.params;
        //await pool.query('UPDATE tareas set titulo=req.body.titulo WHERE id = ?', [id])
        console.log(req.body);
        await pool.query('UPDATE `ng_tareas_db`.`tareas` SET ? WHERE id = ?', [req.body,id])
        /* await pool.query('UPDATE `ng_tareas_db`.`tareas` SET titulo = ?, descripcion = ? WHERE id = ?;', [req.body[0].titulo,req.body[0].descripcion,id]) */
        //UPDATE `ng_tareas_db`.`tareas` SET `titulo` = 'awdawd', `descripcion` = 'agageg' WHERE (`id` = '13');
        res.json({text:'Tarea actualizada'})
    }
}

const tareasController = new TareasController();
export default tareasController;