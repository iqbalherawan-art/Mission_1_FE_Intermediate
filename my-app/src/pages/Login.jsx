import React from 'react'
import '../Components/Login.css'
import logo from '../assets/Images/Logo.png'
import passwordIcon from '../assets/Images/eye-off-icon.png'
import googleIcon from '../assets/Images/google-icon.png'


export default function Login() {
  return (
    <div className="login-page">
      <main className="card-container">
        <img className="logo-main" src={logo} alt="Logo" />
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
              src={passwordIcon}
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
            <img src={googleIcon} alt="google-icon" />
            <p>Masuk dengan google</p>
          </button>
        </form>
      </main>
    </div>
  )
}