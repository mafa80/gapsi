import React from 'react'
import logo from '../assets/logoW.PNG'
import { Link } from 'react-router-dom'
export default function Card() {
  return (
    <div className="container-sm">
    <div class="card text-center">
      <div class="card-header">
        e-Commerce Gapsi
  </div>
      <div class="card-body">
        <img src={logo} alt="logo" />
        <h5 class="card-title">Bienvenido Candidato 01</h5>
        <Link to="/proveedores">
          <a class="btn btn-primary">Continuar</a>
        </Link>
        <p>Version 0.1.0</p>
      </div>

    </div>
    </div>
  )
}
