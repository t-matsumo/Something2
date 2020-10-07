import { ContractController } from '../../controllers/ContractController'
import { Contract } from '../../model/Contract'
import { ContractDataSource } from '../../model/Repository/Contract/ContractDataSource'

export const contractController = new ContractController(new Contract(new ContractDataSource()))
