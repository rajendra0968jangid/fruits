import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import SinglePageHeader from '../Components/SinglePageHeader'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

function SignIn() {
  let [formData, setFormData] = useState({ email: "", password: "" })
  const handleChange = (e) => {
    const { name, value } = e.target
    let data = { ...formData, [name]: value }
    setFormData(data)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    //api call
    const respo = await fetch("http://localhost:8800/signin/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    const jsonreso = await respo.json()
    console.log(jsonreso);
    window.alert(jsonreso["message"])
    if(jsonreso["message"] == "User login successfully"){
      localStorage.setItem("userData",JSON.stringify(jsonreso["data"]))
    }
  }
  return (
    <>
      <Navbar />
      <SinglePageHeader one={{ title: "signin" }} />
      <div>
        <h1>SignIn</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            className="w-100 form-control border-0 py-3 mb-4"
            placeholder="Enter Your Email"
            value={formData["email"]}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            name="password"
            className="w-100 form-control border-0 py-3 mb-4"
            placeholder="Enter Your Password"
            value={formData["password"]}
            onChange={(e) => handleChange(e)}
          />
          <button
            className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
            type="submit"
          >
            SignIn
          </button>
        </form>
        <span>
          Don't have an account?
          <Link to="/signup">SignUp</Link>
        </span>
      </div>
      <Footer />

    </>
  )
}

export default SignIn