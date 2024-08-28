const mongoose = require("mongoose")
require('dotenv').config()

mongoose.connect(process.env.URL);
mongoose.connection.on('error', err => {
    console.log(err);
});
mongoose.connection.on('connected', () => console.log('connected'));

//create collection
const { Schema } = mongoose;
const contactSchema = new Schema({
    name: String, // String is shorthand for {type: String}
    email: String,
    message: String,
});
const Contact = mongoose.model('Contact', contactSchema);

const productSchema = new Schema({
    type: String,
    fName: String,
    fTitle: String,
    fPrice: Number,
    fImage: String,
});
const userSchema=new Schema({
    name: String,
    email:String,
    phone:String,
    password:String
})

const Product = mongoose.model('Product', productSchema);
const User = mongoose.model('User', userSchema);

module.exports = { Contact, Product,User }