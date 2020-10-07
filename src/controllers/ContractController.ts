import { Controller } from './contract/Controller'
import { Contract } from '../model/Contract'

export class ContractController implements Controller {
    private contract: Contract

    constructor(contract: Contract) {
        this.contract = contract
    }

    index = async (_: URL) => {
        return await this.contract.all()
    }
}
