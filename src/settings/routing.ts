import { Controller } from '../controllers/contract/Controller'
import { ContractController } from '../controllers/ContractController'
import { ErrorController } from '../controllers/ErrorController'
import { contractController } from './DIContainers/ContractControllerDIContainer'

export const routing: { [routeName: string]: Controller } = {
    'contracts': contractController,
    'error': new ErrorController,
}
