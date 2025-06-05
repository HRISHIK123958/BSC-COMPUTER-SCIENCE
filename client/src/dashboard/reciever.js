import React from 'react';

const Reciever = () => {
  return (
    <div className="row">
    <h1>Reciever's Details: </h1>
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input id="first_name" type="text" className="validate"/>
            <label for="first_name">First Name</label>
          </div>
          <div className="input-field col s6">
            <input id="last_name" type="text" className="validate" />
            <label for="last_name">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="address" type="text" className="validate" />
            <label for="address">Address</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="phone" type="number" className="validate" />
            <label for="phone">Phone</label>
          </div>
        </div>
      </form>
      <div class="card-action">
        <input placeholder="Enter Your Pin" id="s_loc" type="number" className="validate" />
        <a className="waves-effect waves-light btn ">Check Availability<i class="material-icons">pin_drop</i></a>
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

export default Reciever;
