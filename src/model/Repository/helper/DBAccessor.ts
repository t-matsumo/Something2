import sqlite3 from 'sqlite3'

import { DB_PATH } from '../../../settings/env'

export const selectAll = async (sql: string) => {
    return await new Promise<Object>(resolve => {
        const db = new sqlite3.Database(DB_PATH)
        db.serialize(() => {
            db.all(sql, (err, row) => { resolve(row) })
        })
        db.close()
    })
}
