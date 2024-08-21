const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(cors({
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
}))

app.get('/product/alldata', (req, res) => {
  let data = [{
    id:1,
    type: "Fruits",
    fName: "Grapes",
    fTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    fPrice: 4.99,
    fImage: "img/fruite-item-5.jpg",
  }, {
    id:2,
    type: "Fruits",
    fName: "Grapes",
    fTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    fPrice: 5.99,
    fImage: "img/fruite-item-5.jpg",
  }, {
    id:3,
    type: "Fruits",
    fName: "Raspberries",
    fTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    fPrice: 4.99,
    fImage: "img/fruite-item-2.jpg",
  }, {
    id:4,
    type: "Fruits",
    fName: "Apricots",
    fTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    fPrice: 4.99,
    fImage: "img/fruite-item-4.jpg",
  }, {
    id:5,
    type: "Fruits",
    fName: "Banana",
    fTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    fPrice: 4.99,
    fImage: "img/fruite-item-3.jpg",
  }, {
    id:6,
    type: "Fruits",
    fName: "Oranges",
    fTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    fPrice: 4.99,
    fImage: "img/fruite-item-1.jpg",
  }, {
    id:7,
    type: "Fruits",
    fName: "Grapes",
    fTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    fPrice: 4.99,
    fImage: "img/fruite-item-5.jpg",
  }, {
    id:8,
    type: "Fruits",
    fName: "Raspberries",
    fTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    fPrice: 4.99,
    fImage: "img/fruite-item-2.jpg",
  }]
  res.status(200).json({ data: data });
})

app.post('/contact/insert', (req, res) => {
  const data = req.body;
  console.log(data)
  res.json({ data: "", message: "Data inserted successfully" })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})