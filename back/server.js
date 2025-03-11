const express = require("express");
const app = express();
const PORT = process.env.PORT || 3005;
require('dotenv').config();
const cors = require('cors');
const { Counter, sequelize} = require("./model");

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(cors());


app.get('/counter', async(req,res) => {
  try {
    // const result = await Counter.findALl();
    const data = await Counter.findAll({
      order: [['id', 'DESC']]
    });
    res.json({data})
    console.log(data);
    
  } catch (error) {
    res.json({error})
      console.log(error)
  }
});

app.post('/counter', async(req,res) => {
  try {
    const { newValue } = req.body;
    console.log(newValue);
    
    const data = await Counter.create({value: newValue});

    res.json({data});

  } catch (error) {
    console.log(error);
    
  }
})



app.listen(PORT, async() => {
  await sequelize.sync({force: true})
  
    console.log(`server open${PORT}`);
    
})
