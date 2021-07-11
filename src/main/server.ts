import { PostgresDatabase } from '@/infra/db'
import env from '@/main/config/env'


const startServer = async () => {
  const database = new PostgresDatabase()

  database
    .connect()
    .then(async () => {
      const app = await (await import('@/main/config/frameworks/express')).expressApp()
      app.listen(env.port, () => console.log(`server running at: http://localhost:${env.port}/api`))
    })
    .catch((error) => {
      console.log(`database connection problem: ${error}`)
    })
}

startServer()
