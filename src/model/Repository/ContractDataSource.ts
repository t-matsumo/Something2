import sqlite3 from 'sqlite3'

import { DB_PATH } from '../../settings/env'
import { ContractRepository  } from './ContractRepository'

export class ContractDataSource implements ContractRepository {
    all = async () => {
        return await new Promise<Object>(resolve => {
            const db = new sqlite3.Database(DB_PATH)
            db.serialize(() => {
                db.all(`SELECT *
                    FROM Contracts
                    left join Users on Contracts.user_id = Users.id
                    left join Spaces on Contracts.space_id = Spaces.id  `,
                    (err, row) => {
                        resolve(row)
                    }
                )
            })
            db.close()
        })
    }
}
