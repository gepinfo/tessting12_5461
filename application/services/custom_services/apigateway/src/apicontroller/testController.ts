import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdapter }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class testController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post('/test', this.GpCreate);
    }

public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into testController.ts: GpCreate');
        new ApiAdapter().post(Constant.TESTING12URL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from testController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }








}

