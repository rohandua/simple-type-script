import {Controller,Post,Put,Get} from 'inversify-restify-utils';
import {injectable,inject} from 'inversify';
import { Request } from 'restify';
import { CatalogServiceContract} from '../services/catalog-service';
import { ControllerBase } from './controller-base';
import { Catalog as CatalogModel} from '../models/catalog';
import { ResponseViewModel } from '../viewmodels/response-viewmodel';

@Controller('/catalog')
@injectable()
export class CatalogController extends ControllerBase{
    
    constructor(@inject('CatalogService') private readonly catalogService: CatalogServiceContract){
        super()
    }

    @Get('/:id')
    getCatalogById(req:Request): Promise<ResponseViewModel<CatalogModel>>{
        return this.catalogService.getCatalogById(req.params.id)
    }


}