import React from 'react'
import Logo from '../../assets/images/logo.png'
import '../Organism/Style/Footer.css'

export default function Footer() {
    return (
        <>
        <footer>
  <div className="footer-container">
    <div className="footer-column logo-column">
      <img src="../Images/logo.png" alt="Company Logo" />
      <a className="copyright">@2023 Chill All Rights Reserved.</a>
    </div>
    <div className="footer-column genre-column">
      <h4>Genre</h4>
      <ul>
        <li>
          <a href="">Aksi</a>
        </li>
        <li>
          <a href="">Anak-anak</a>
        </li>
        <li>
          <a href="">Anime</a>
        </li>
        <li>
          <a href="">Britania</a>
        </li>
      </ul>
    </div>
    <div className="footer-column genre-column">
      <ul>
        <li>
          <a href="">Drama</a>
        </li>
        <li>
          <a href="">Fantasi Ilmiah &amp; Fantasi</a>
        </li>
        <li>
          <a href="">Kejahatan</a>
        </li>
        <li>
          <a href="">KDrama</a>
        </li>
      </ul>
    </div>
    <div className="footer-column genre-column">
      <ul>
        <li>
          <a href="">Komedi</a>
        </li>
        <li>
          <a href="">Petualangan</a>
        </li>
        <li>
          <a href="">Perang</a>
        </li>
        <li>
          <a href="">Romantis</a>
        </li>
      </ul>
    </div>
    <div className="footer-column genre-column">
      <ul>
        <li>
          <a href="">Sains &amp; Alam</a>
        </li>
        <li>
          <a href="">Thriller</a>
        </li>
      </ul>
    </div>
    <div className="footer-column genre-column bantuan-column">
      <h4>Bantuan</h4>
      <ul>
        <li>
          <a href="">FAQ</a>
        </li>
        <li>
          <a href="">Kontak Kami</a>
        </li>
        <li>
          <a href="">Privasi</a>
        </li>
        <li>
          <a href="">Syarat &amp; Ketentuan</a>
        </li>
      </ul>
    </div>
    <div className="mobile-genre">
      <details>
        <summary>Genre</summary>
        <ul>
          <li>
            <a href="">Aksi</a>
          </li>
          <li>
            <a href="">Anak-anak</a>
          </li>
          <li>
            <a href="">Anime</a>
          </li>
          <li>
            <a href="">Britania</a>
          </li>
          <li>
            <a href="">Drama</a>
          </li>
          <li>
            <a href="">Fantasi Ilmiah &amp; Fantasi</a>
          </li>
          <li>
            <a href="">Kejahatan</a>
          </li>
          <li>
            <a href="">KDrama</a>
          </li>
          <li>
            <a href="">Komedi</a>
          </li>
          <li>
            <a href="">Petualangan</a>
          </li>
          <li>
            <a href="">Perang</a>
          </li>
          <li>
            <a href="">Romantis</a>
          </li>
          <li>
            <a href="">Sains &amp; Alam</a>
          </li>
          <li>
            <a href="">Thriller</a>
          </li>
        </ul>
      </details>
    </div>
    <div className="mobile-bantuan">
      <details>
        <summary>Bantuan</summary>
        <ul>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Kontak Kami</a>
          </li>
          <li>
            <a href="">Privasi</a>
          </li>
          <li>
            <a href="">Syarat &amp; Ketentuan</a>
          </li>
        </ul>
      </details>
    </div>
  </div>
</footer>

        </>
    )
}