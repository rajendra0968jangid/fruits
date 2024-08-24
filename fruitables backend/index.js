const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require('body-parser')
const { Contact, Product } = require("./conn")
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors({
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
}))

app.get('/product/alldata', async (req, res) => {
  let data = await Product.find()
  res.status(200).json({ data: data });
})

app.post('/contact/insert', async (req, res) => {
  const data = req.body;
  // console.log(data)
  // insert data in data base
  const newContact  = await Contact.create(data);
  const saveContact = await newContact.save()
  res.json({ data: "", message: "Data inserted successfully" })
})
app.post('/checkout/insert', (req, res) => {
  const data = req.body;
  console.log(data)
  // const newContact  = await Contact.create(data);
  // const saveContact = await newContact.save()
  res.json({ data: "", message: "Data inserted successfully" })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})