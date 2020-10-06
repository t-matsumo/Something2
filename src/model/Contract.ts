import { ContractDataSource } from '../Repository/ContractDatasource'

export class Contract {
    dataSource = new ContractDataSource()

    all = async () => {
        return await this.dataSource.all()
    }
}
