import cors from "cors"
import express, {Request, Response} from "express"

const app = express()

const PORT = 3000

app.use(express.json())
app.use(cors())

app.get("/", (req: Request,res: Response) => {
  res.send("Welcome to typescript")
})

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}...`)
})