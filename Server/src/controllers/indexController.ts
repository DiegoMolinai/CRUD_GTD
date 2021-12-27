import {Request, Response} from 'express';

class IndexController {

    public index (req: Request, res: Response){
        res.send("WENA DESDE INDEX CONTROLLER")
    }
}

export const indexController = new IndexController();