import React from 'react'
import Navbar from '../Components/Navbar'
import SinglePageHeader from '../Components/SinglePageHeader'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

function SignIn() {
 return (
    <>
    <Navbar/>
    <SinglePageHeader one={{title:"signin"}}/>
    <div>
        <h1>SignIn</h1>
    <form>
                  <input
                    type="email"
                    name="email"
                    className="w-100 form-control border-0 py-3 mb-4"
                    placeholder="Enter Your Email"
                  />
                  <input
                    type="password"
                    name="password"
                    className="w-100 form-control border-0 py-3 mb-4"
                    placeholder="Enter Your Password"
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
    <Footer/>

    </>
  )
}

export default SignIn