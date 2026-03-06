import React from 'react'
import '../../Components/Organism/Style/Header.css'

export default function Hero() {
    return (
        <>
        <section className="hero-section">
    <h1 className="hero-h1">Duty After School</h1>
    <p className="hero-p">
      Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
      Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa
      sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam
      perang.
    </p>
    <div className="hero-action-container">
      <div className="hero-action">
        <ul>
          <li>
            <button type="button" className="hero-mulai">
              Mulai
            </button>
          </li>
          <li>
            <button type="button" className="hero-selengkapnya">
              ⓘ Selengkapnya
            </button>
          </li>
          <li>
            <button type="button" className="hero-rating">
              18+
            </button>
          </li>
          <li />
        </ul>
      </div>
      <button type="button" className="hero-mute">
        <img src="../Images/Mute.png" />
      </button>
    </div>
  </section>
  <section className="body"></section>
</>
    )
}