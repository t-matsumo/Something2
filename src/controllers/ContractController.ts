import sqlite3 from 'sqlite3'

import { Controller } from './contract/Controller'

export class ContractController implements Controller {
    index = async () => {
        return await new Promise<Object>(resolve => {
            const db = new sqlite3.Database('data/something.sqlite3')
            db.serialize(() => {
                db.all("SELECT name FROM contracts", (err, row) => {
                    resolve(row)
                })
            })
            db.close()
        })
    }
}
