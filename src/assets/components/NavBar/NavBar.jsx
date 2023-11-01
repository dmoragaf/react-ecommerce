import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Tienda Ovejita
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/nuevos">Nuevos Productos</a>
            <a className="nav-link" href="/buckets">Buckets</a>
          </div>
        </div>
      </div>
      
      <CartWidget />
    </nav>
  );
}

export default NavBar;
