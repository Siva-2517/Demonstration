const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')


dotenv.config({quiet: true});
app.use(express.json());
console.log("Server is starting...")

mongoose.connect(process.env.MONGO_URI

).then(() => {
    console.log("Connected to MongoDB");
})
.catch((err)=>{
    console.log("Error connecting to MongoDB:", err);
})

app.use('/auth',require('./routes/user.routes'))
app.use('/auth',require('./routes/task.routes'))


app.listen(process.env.PORT, () => {
    console.log("Server is running on port " + process.env.PORT);
})
app.get('/api', (req, res) => {
    res.send('Hello from the gojo server!' );
})

app.post('/api', (req, res) => {
    const tmp=req.body;
    res.send(tmp);
})