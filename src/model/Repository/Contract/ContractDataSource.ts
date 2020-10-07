import { ContractRepository  } from './ContractRepository'
import { selectAll } from '../helper/DBAccessor'

export class ContractDataSource implements ContractRepository {
    all = async () => {
        return await selectAll(`SELECT *
            FROM Contracts
            left join Users on Contracts.user_id = Users.id
            left join Spaces on Contracts.space_id = Spaces.id `)
    }
}
