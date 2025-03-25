// root file 
const express =  require('express');
require('dotenv').config()
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors())

//server listen
const PORT = process.env.PORT || 3030
app.listen(PORT,()=>{
    try {
        console.log('App is running on 3030')
    } catch (error) {
        console.log('ERROR',error.message)
    }
})