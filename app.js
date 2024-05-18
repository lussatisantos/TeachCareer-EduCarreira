import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

app.use(express.static(path.join(__dirname)))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/sobrenos', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates/sobrenos.html'))
})

app.get('/signInOut', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates/signInOut.html'))
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})