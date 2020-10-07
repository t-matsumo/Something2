import { ContractRepository } from './Repository/ContractRepository'

export class Contract {
    private dataSource: ContractRepository

    constructor(repository: ContractRepository) {
        this.dataSource = repository
    }

    all = async () => {
        return await this.dataSource.all()
    }
}
