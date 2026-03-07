import React from 'react'
import '../Components/Register.css'

export default function Register() {
    return (
<main className="card-container">
  <img className="logo-main" src="../images/Logo.png" alt="Logo" />
  <div className="card-header">
    <p>Daftar</p>
    <p>Selamat datang!</p>
  </div>
  <form className="card-form" action="#">
    <div className="input-spacing">
      <label className="form-label" htmlFor="username">
        Username
      </label>
      <input
        className="form-input"
        type="text"
        name="username"
        placeholder="Masukkan username"
      />
    </div>
    <div className="input-spacing">
      <label className="form-label" htmlFor="password">
        Kata Sandi
      </label>
      <input
        className="form-input"
        type="password"
        name="password"
        placeholder="Masukkan kata sandi"
      />
      <img
        className="password-icon"
        src="../images/eye-off-icon.png"
        alt="eye-off-icon"
      />
      <label className="form-label" htmlFor="password">
        Konfirmasi Kata Sandi
      </label>
      <input
        className="form-input"
        type="password"
        name="password"
        placeholder="Masukkan kata sandi"
      />
      <img
        className="password-icon"
        src="../images/eye-off-icon.png"
        alt="eye-off-icon"
      />
      <div className="form-alternative">
        <p>
          Sudah punya akun? <a href="Login.html">Masuk</a>
        </p>
      </div>
    </div>
    <button type="submit" className="form-button form-button-submit">
      Daftar
    </button>
    <p className="separator">Atau</p>
    <button type="button" className="form-button form-button-google">
      <img src="../Images/google-icon.png" alt="google-icon" />
      <p>Daftar dengan google</p>
    </button>
  </form>
</main>
    )
}