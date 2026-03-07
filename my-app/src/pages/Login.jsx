import React from 'react'
import '../Components/Login.css'

export default function Login() {
  return (
    <main className="card-container">
      <img className="logo-main" src="../assets/Images/Logo.png" alt="Logo" />
      <div className="card-header">
        <p>Masuk</p>
        <p>Selamat datang kembali!</p>
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
        src="../assets/Images/eye-off-icon.png"
        alt="eye-off-icon"
      />
      <div className="form-alternative">
        <p>
          Belum punya akun? <a href="../assets/Images/register.html">Daftar</a>
        </p>
        <a href="#">Lupa kata sandi?</a>
      </div>
      </div>
      <button type="submit" className="form-button form-button-submit">
      Masuk
      </button>
      <p className="separator">Atau</p>
      <button type="button" className="form-button form-button-google">
      <img src="../assets/Images/google-icon.png" alt="google-icon" />
      <p>Masuk dengan google</p>
      </button>
      </form>
      </main>
    )  
}