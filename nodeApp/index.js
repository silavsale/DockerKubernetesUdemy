import express from "express"

const app = express()

app.get('/', (req, res) => {
    res.send("Hello World!!! and Mars!!!")
})

app.listen(3000, ()=> {
    console.log('Now running on port 3000');
})
