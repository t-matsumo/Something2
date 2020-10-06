import { Controller } from './contract/Controller'
import { Contract } from '../model/Contract'

export class ContractController implements Controller {
    contract = new Contract()

    index = async (_: URL) => {
        return await this.contract.all()
    }
}
