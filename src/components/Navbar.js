import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
            </nav>
        </div>
    )
}
