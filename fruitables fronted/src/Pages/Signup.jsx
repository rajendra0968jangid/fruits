import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import SinglePageHeader from '../Components/SinglePageHeader'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
    let [obj, setObj] = useState({ name: "", email: "", phone: "", password: "", confirmpw: "" })
    const navigate = useNavigate();
    let [error, setError] = useState({ message: "" })
    const handleChange = async (e) => {
        const { name, value } = e.target
        let data = { ...obj, [name]: value }
        setObj(data)
        console.log(data);


    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const respo = await fetch("http://localhost:8800/signup/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        })
        const jsonreso = await respo.json()
        console.log(jsonreso);
        window.alert(jsonreso["message"])
        if(jsonreso["message"] == "created"){
            navigate("/signin")
        }
    }

    return (
        <>
            <Navbar />
            <SinglePageHeader one={{ title: "SignUp" }} />
            <div>
                <h1>SignUp</h1>
                <p className='text-danger'>{error["message"]}</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        className="w-100 form-control border-0 py-3 mb-4"
                        placeholder="Your Name"
                        onChange={(e) => (handleChange(e))}
                        value={obj['name']}
                    />
                    <input
                        type="email"
                        name="email"
                        className="w-100 form-control border-0 py-3 mb-4"
                        placeholder="Enter Your Email"
                        onChange={(e) => (handleChange(e))}
                        value={obj['email']}
                    />
                    <input
                        type="number"
                        name="phone"
                        className="w-100 form-control border-0 py-3 mb-4"
                        placeholder="Enter Your Number"
                        onChange={(e) => (handleChange(e))}
                        value={obj['phone']}
                    />
                    <input
                        type="password"
                        name="password"
                        className="w-100 form-control border-0 py-3 mb-4"
                        placeholder="Enter Your Password"
                        onChange={(e) => (handleChange(e))}
                        value={obj['password']}
                    />
                    <input
                        type="password"
                        name="confirmpw"
                        className="w-100 form-control border-0 py-3 mb-4"
                        placeholder="Enter Your Confirm Password"
                        onChange={(e) => (handleChange(e))}
                        value={obj['confirmpw']}
                    />
                    <button
                        className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
                        type="submit"
                    >
                        Sign Up
                    </button>
                </form>
                <span>
                    already have an account?
                    <Link to="/signin">SignIn</Link>
                </span>
            </div>
            <Footer />

        </>
    )
}

export default Signup 