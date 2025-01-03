import express, { Application } from "express"
import routes from "./routes/index.js";



const app :Application  = express() ;

app.use(express.json())


const PORT = process.env.PORT  || 7000


app.use('/api', routes);



app.listen(PORT,()=>{
    console.log(`Server listening on Port ${PORT}`)
})

