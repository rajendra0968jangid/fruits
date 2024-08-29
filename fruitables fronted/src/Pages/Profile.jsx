import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import SinglePageHeader from '../Components/SinglePageHeader'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom'

function Profile() {
    let [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData'))||{})
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('userData')
        navigate('/')
    }
    return (
        <>
            <Navbar />
            <SinglePageHeader one={{ title: "Profile" }} />
            <h1>name:{userData["name"]}</h1>
            <h1>email:{userData["email"]}</h1>
            <h1>phone:{userData["phone"]}</h1>
            <button
                type="submit"
                className="btn btn-primary border-2 border-secondary rounded-pill text-white h-100"
                style={{ top: 0, right: "25%" }}
                onClick={handleLogout}
            >
                Log out
            </button>
            <Footer />
        </>
    )
}

export default Profile