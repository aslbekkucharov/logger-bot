import dotenv from 'dotenv'
import clc from 'cli-color'
import express, { Express, Request, Response } from 'express'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.get('/', (req: Request, res: Response): void => {
    res.send('Server is working')
})

app.post('/send-message', (req: Request, res: Response): void => { })

app.listen(port, () => {
    console.log(clc.greenBright('⚡️[server]:') + ' Server is running at https://localhost:' + port)
})