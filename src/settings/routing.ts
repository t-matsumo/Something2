import { Controller } from '../controllers/contract/Controller'
import { ContractController } from '../controllers/ContractController'
import { ErrorController } from '../controllers/ErrorController'

export const routing: { [routeName: string]: Controller } = {
    'contracts': new ContractController,
    'error': new ErrorController,
}
