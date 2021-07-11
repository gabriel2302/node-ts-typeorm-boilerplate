import { Database } from '@/infra/contracts'
import env from '@/main/config/env'
import * as path from 'path'
import { createConnection } from 'typeorm'

export class PostgresDatabase implements Database {
  async connect() {
    const database = await createConnection({
      type: 'postgres',
      host: env.databases.postgres.host,
      database: env.databases.postgres.database,
      username: env.databases.postgres.user,
      password: env.databases.postgres.password,
      port: +env.databases.postgres.port,
      synchronize: false,
      entities: [path.resolve(__dirname, './entities/*-entity{.ts,.js}')],
    })

    return database
  }
}
