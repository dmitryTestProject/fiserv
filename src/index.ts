import express, { Application, Request, Response } from 'express'
import { formatString, formatString2 } from "./utils"
import { ResponseData } from './ResponseData'

const app: Application = express()
app.use(express.json())


app.post('/api/v1/parse', (req: Request, res: Response) => {
    const data = req.body.data
    const [firstName, lastName, clientId] = formatString2(data)
    const resData: ResponseData = {
        statusCode: 200,
        data: {
            firstName: firstName,
            lastName: lastName,
            clientId: clientId
        }
    }
    res.status(200).json(resData)
})


app.post('/api/v2/parse', (req: Request, res: Response) => {
    const data = req.body.data
    const [firstName, lastName, clientId] = formatString(data)
    const resData: ResponseData = {
        statusCode: 200,
        data: {
            firstName: firstName,
            lastName: lastName,
            clientId: clientId
        }
    }
    res.status(200).json(resData)
})


const PORT = 8800

app.listen(PORT, () => console.log(`App is running on port ${PORT}, press CTRL + C to stop`))