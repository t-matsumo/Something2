import { Controller } from '../controllers/contract/Controller'
import { ContractController } from '../controllers/ContractController'
import { ErrorController } from '../controllers/ErrorController'
import { Contract } from '../model/Contract'
import { ContractDataSource } from '../model/Repository/ContractDataSource'

// DI
const contractController = new ContractController(new Contract(new ContractDataSource()))

export const routing: { [routeName: string]: Controller } = {
    'contracts': contractController,
    'error': new ErrorController,
}
