// import {Catalog} from '../models';
import { ErrorModel, ResponseViewModel } from '../viewmodels/response-viewmodel';
import { getRepository } from 'typeorm'
import { Catalog as CatalogModel } from '../../database/models';

export interface CatalogServiceContract {
    getCatalogById(id:string):Promise<ResponseViewModel<CatalogModel>>
}
 
export class CatalogService implements CatalogServiceContract{

    public async getCatalogById(id: string): Promise<ResponseViewModel<CatalogModel>> {
        const response = new ResponseViewModel<CatalogModel>();
        try{
            const catalog = await getRepository(CatalogModel).findOne({id});
            if(catalog){
                response.data = catalog
            }
        }catch(e){
            response.errors.push(new ErrorModel('Error in fetching data'))
            return response;
        }
        response.errors = []
        return response;    
    }    
}