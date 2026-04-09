import React from 'react'
import Logo from '../../assets/Images/Avatar.png'
import { Link } from 'react-router-dom'
import '../Organism/Style/Header.css'

export default function Navbar() {
    return (
        <>
        <header className="Header">
            <nav>
                <a href="index.html"></a>
                <div className="logoheader" />
                <div className="nav-links">
                    <ul>
                        <li>
                            <a href="">Series</a>
                        </li>
                        <li>
                            <a href="">Film</a>
                        </li>
                        <li>
                            <a href="">Daftar Saya</a>
                        </li>
                        <li>
                            <Link to="/admin" style={{ color: '#e50914', fontWeight: 'bold' }}>Admin</Link>
                        </li>
                    </ul>
                </div>
                <img
                    className="current-account"
                    src={Logo}
                    alt="Avatar"
                    height="35"
                />
            </nav>
        </header>
        </>
    )
}