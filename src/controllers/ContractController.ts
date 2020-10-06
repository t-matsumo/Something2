import sqlite3 from 'sqlite3'

import { Controller } from './contract/Controller'
import { DB_PATH } from '../settings/env'

export class ContractController implements Controller {
    index = async (_: URL) => {
        return await new Promise<Object>(resolve => {
            const db = new sqlite3.Database(DB_PATH)
            db.serialize(() => {
                db.all("SELECT first_name, last_name FROM Users", (err, row) => {
                    resolve(row)
                })
            })
            db.close()
        })
    }
}
