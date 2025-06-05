import React from 'react';
import { Link } from 'react-router-dom';

import Sender from "./dashboard/sender.js";
import Reciever from "./dashboard/reciever.js";
import Product from "./dashboard/product.js";


const Dashboard = () => {
  return (
  <div className="home">

    <nav className="navbar white-text">
        <div className="brand-title">SHIPSY</div>
        <div className="navbar-links">
          <Link to="/" className="white-text nav-link">Home</Link>
          <Link to="/login" className="white-text nav-link">Login</Link>
          <Link to="/features" className="white-text nav-link">Features</Link>
          <Link to="/contact" className="white-text nav-link">Contact Us</Link>
        </div>
      </nav>

    <div className="container">

      <div className="row">
      <Sender />
      </div>

      <div className="row">
      <Reciever />
      </div>

      <div className="row">
      <Product />
      </div>

      <div className="row center-align">
      <a class="waves-effect waves-light btn-large"><i class="material-icons left">shopping_cart</i>Place Order</a>
      </div>
    </div>
  </div>
  );
};

export default Dashboard;
