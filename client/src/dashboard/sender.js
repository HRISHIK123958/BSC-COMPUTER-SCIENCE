import React, { useState } from 'react'
import MapPicker from 'react-google-map-picker'
// import { setDefaults, fromLatLng } from "react-geocode";


const DefaultLocation = { lat: 10, lng: 106};
const DefaultZoom = 15;
var geolocation = require('geolocation')


const Sender = () => {


  return (
  <div>
    <div className="row">
        <div className="col s4 center-align">
          <img className="circle responsive-image" src="https://source.unsplash.com/random/200x200?sig=1" alt="Profile Image" />
        </div>
        <div className="col s8">
          <div classname="col s12 m10">
            <div classname="card">
              <div classname="card-content">
                <span classname="card-title">User Full Name</span>
                <p>User Email</p>
                <p>User Phone</p>
                </div>
                <div classname="card-action">
                  <input placeholder="Enter Your Pin" id="s_loc" type="number" className="validate" />
                  <a className="waves-effect waves-light btn ">Check Availability<i classname="material-icons">pin_drop</i></a>
                </div>
              </div>
            </div>
        </div>
    </div>
    <div className="row">

      <div className="row">
        <div className="">
          <h1> MAP PICKER</h1>
        </div>
      </div>

    </div>
  </div>
  );
}

export default Sender;