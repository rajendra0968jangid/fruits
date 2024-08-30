require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8800
const cors = require('cors')
const bodyParser = require('body-parser')
const { Contact, Product, User } = require("./conn")
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors({
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
}))

app.get('/product/alldata', async (req, res) => {
  let data = [
    {
      "id": 3,
      "type": "Fruits",
      "fName": "Raspberries",
      "fTitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      "fPrice": 4.99,
      "fImage": "img/fruite-item-2.jpg"
    },
    {

      "id": 5,
      "type": "Fruits",
      "fName": "Banana",
      "fTitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      "fPrice": 4.99,
      "fImage": "img/fruite-item-3.jpg"
    },
    {

      "id": 8,
      "type": "Fruits",
      "fName": "Raspberries",
      "fTitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      "fPrice": 4.99,
      "fImage": "img/fruite-item-2.jpg"
    },
    {

      "id": 1,
      "type": "Fruits",
      "fName": "Grapes",
      "fTitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      "fPrice": 4.99,
      "fImage": "img/fruite-item-5.jpg"
    },
    {

      "id": 7,
      "type": "Fruits",
      "fName": "Grapes",
      "fTitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      "fPrice": 4.99,
      "fImage": "img/fruite-item-5.jpg"
    },
    {

      "id": 4,
      "type": "Fruits",
      "fName": "Apricots",
      "fTitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      "fPrice": 4.99,
      "fImage": "img/fruite-item-4.jpg"
    },
    {

      "id": 6,
      "type": "Fruits",
      "fName": "Oranges",
      "fTitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      "fPrice": 4.99,
      "fImage": "img/fruite-item-1.jpg"
    },
    {

      "id": 2,
      "type": "Fruits",
      "fName": "Grapes",
      "fTitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      "fPrice": 5.99,
      "fImage": "img/fruite-item-5.jpg"
    }
  ]
  res.status(200).json({ data: data });
})

app.post('/contact/insert', async (req, res) => {
  const data = req.body;
  // console.log(data)
  // insert data in data base
  const newUser = await User.create(data);
  const saveUser = await newUser.save()
  res.json({ data: "", message: "Data inserted successfully" })
})
app.post('/checkout/insert', (req, res) => {
  const data = req.body;
  console.log(data)
  // const newContact  = await Contact.create(data);
  // const saveContact = await newContact.save()
  res.json({ data: "", message: "Data inserted successfully" })
})
app.post('/shop/search', async (req, res) => {
  const data = req.body;
  // console.log(data);
  let searchdata = await Product.find({ fName: data["name"] })
  res.json({ message: "data", data: searchdata })

})
app.post('/signin/user', async (req, res) => {
  const data = req.body;
  console.log(data);
  const existingUser = await User.findOne({ email: data["email"], password: data["password"] })
  if (existingUser) {
    return res.json({ data: existingUser, message: "User login successfully" })
  }
  res.json({ message: "User credentials invalid" })
})
app.post('/signup/user', async (req, res) => {
  const data = req.body;
  const existingUser = await User.findOne({ email: data["email"] })
  if (existingUser) {
    return res.json({ message: "User already exist" })
  }
  console.log(data);
  if (data["password"] != data["confirmpw"]) {
    return res.json({ message: "Password mismatch" })
  }
  const newContact = await User.create(data);
  const saveContact = await newContact.save()
  res.json({ message: "created" })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})