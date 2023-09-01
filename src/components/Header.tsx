import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/Test">Test</Link>
            <br />
        </>
    )
}

export default Header