import express from 'express'
import { router } from './routes'
const app = express()
app.use('/', router)


app.listen(2001, () => {
    console.log('Working!')
})
