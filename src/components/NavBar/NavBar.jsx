import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = ({ cartCount }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">

        <NavLink className="navbar-brand" to="/">
          Tienda Ovejita
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/category/electronics">
              Electrónica
            </NavLink>
            <NavLink className="nav-link" to="/category/jewelery">
              Joyería
            </NavLink>
          </div>
        </div>
      </div>
      
      <CartWidget cartCount={cartCount} />
    </nav>
  );
}

export default NavBar;
