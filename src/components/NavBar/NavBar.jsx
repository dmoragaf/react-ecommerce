import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = ({ cartCount }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top shadow-sm">
      <div className="container-fluid">

        <NavLink className="navbar-brand" to="/">
          <img src="../src/assets/img/tienda-ovejita.jpg" alt="Logo" height="70" width="70" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/category/buckets">
              Buckets
            </NavLink>
            <NavLink className="nav-link" to="/category/jewelery">
              Joyería
            </NavLink>
            <NavLink className="nav-link" to="/category/panoletas">
              Pañoletas
            </NavLink>
          </div>
        </div>
      </div>
      
      <CartWidget cartCount={cartCount} />
    </nav>
  );
}

export default NavBar;
