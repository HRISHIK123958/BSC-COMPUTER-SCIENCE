import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div>
      <h1>Product Specs:</h1>
      <div className="row">
        <div classname="col s4">
        <h3>Product Type</h3>
            <p>
              <label>
                <input name="group1" type="radio" checked />
                <span>Product type 1</span>
              </label>
            </p>
            <p>
              <label>
                <input name="group1" type="radio" />
                <span>Product type 2</span>
              </label>
            </p>
            <p>
              <label>
                <input classname="group1" name="group1" type="radio"  />
                <span>Product type 3</span>
              </label>
            </p>
        </div>
        <div classname="col s4">
          <h3>Product Weight (In Kilo Grams)</h3>
          <div className="row">
          <div className="input-field col s12">
            <input id="weight" type="number" className="validate" />
            <label for="weight">Weight KG(s)</label> 
          </div>
        </div>
        </div>
        <div classname="col s4">
          <h1>Total Price:</h1> 
          <div class="card">
            <div class="card-content">
              <span class="card-title">Type: (Rate)</span>
              <span class="card-title">Weight: </span>
              <span class="card-title">Subtotal: Weight*rate</span>
              <span class="card-title">Delivery Charges: Rate*Distance</span>
              <span class="card-title">Total: Delivery + Subtotal</span>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
}

export default Product;
