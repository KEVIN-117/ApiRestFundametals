import express from "express"

const app = express()

app.get('/', (req, res)=>{
    res.sendFile(process.cwd() + '/client/index.html')
})

app.listen(3000, (error)=>{
    if (!error){

        console.log(`server is running on port ${3000}`)
    }

})