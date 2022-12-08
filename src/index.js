const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const multer = require('multer');


const cors = require('cors')
const res = require('express/lib/response');
//rutas
const userRoutes = require("./routes/user");
const courseRoutes = require("./routes/course");
const categoryRoutes = require("./routes/category");



require("dotenv").config(); //para hacer variables custom instalar dependeica npm i dotenv
const app = express();
const port = process.env.PORT || 9000;

app.get("api/sensors",(req, res) =>
{
  let sensores = []
  db.collection('sensores')
  .find()
  .sort({tipo:1})
  .forEach(sensor => sensores.push(sensor))
  .then(()=>{
    res.status(200).json(sensores)
  })
  .catch(()=>{
    res.status(500).json({error: 'No Encontrado'})
  })
  
});


app.use(cors())
app.use(express.json());
app.use('/api',userRoutes, courseRoutes, categoryRoutes);

app.get("/",(req, res) =>
{
  res.send("Bienvenido a mi API");

});


mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log('Se ha conectado a base de datos satisfacotoriamente'))
.catch((error) => console.error(error));
app.listen(port, () => console.log('sever listening on port', port));