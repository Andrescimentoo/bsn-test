import express, { json } from "express" 
import cors from "cors";
import { routeEndPointsPokemon } from "./src/routes/routesEndPointsPokenmon.routes"

export const app = express()
const port = 3000

app.use(json())
app.use(cors())

app.use(routeEndPointsPokemon)

app.listen(port, () => {
    console.log(`server it's running in ${port}`)
})