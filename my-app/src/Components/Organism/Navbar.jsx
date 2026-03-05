import React from 'react'
import Logo from '..src/assets/images/Avatar.png'

export default function Navbar() {
    return (
        <>
        <header className="Header">
            <nav>
                <a href="index.html" />
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
      </ul>
    </div>
    <img
      className="current-account"
      src="..src/assets/images/Avatar.png"
      alt=""
      height="35px"
    />
  </nav>
</header>
        </>
    )
}