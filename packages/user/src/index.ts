import { Hono } from 'hono'
import {logger} from "hono/logger"
import { AuthHandler } from './handlers/rest';
import { cors } from 'hono/cors'


const app = new Hono()

app.use(logger())
app.use('*', cors())
app.basePath("/api")

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/auth', AuthHandler)

export default app
