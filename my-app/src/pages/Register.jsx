import React from 'react'
import '../Components/Register.css'
import logo from '../assets/Images/Logo.png'
import passwordIcon from '../assets/Images/eye-off-icon.png'
import googleIcon from '../assets/Images/google-icon.png'

export default function Register() {
    return (
      <div className="register-page">
        <main className="card-container">
          <img className="logo-main" src={logo} alt="Logo" />
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
                src={passwordIcon}
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
                src={passwordIcon}
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
              <img src={googleIcon} alt="google-icon" />
              <p>Daftar dengan google</p>
            </button>
          </form>
        </main>
      </div>
    )
}