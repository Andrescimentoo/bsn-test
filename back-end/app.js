import express from "express" 

export const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`server it's running in ${port}`)
})