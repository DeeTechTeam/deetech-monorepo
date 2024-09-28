import { Hono } from 'hono'
import {logger} from "hono/logger"
import { AuthHandler } from './handlers';
import { cors } from 'hono/cors'


const app = new Hono().basePath("/api")
app.use(logger())
app.use('*', cors())
app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/auth', AuthHandler)

export default app
