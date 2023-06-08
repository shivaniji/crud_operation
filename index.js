var express  = require('express')    
var bodyParser = require('body-parser')  
const  app = express()
const router= require('./routers/routers')
app.use(express.json());
app.use("/", router);


const PORT = 5500;

app.listen(PORT, (req, res) => {
    console.log(`Your server is listening on http://localhost:${PORT}`);
  });
