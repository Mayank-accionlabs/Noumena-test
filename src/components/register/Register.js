import React, { useState } from "react";
import "./Register.css";
import { connect } from "react-redux";
import {setUserData} from '../../actions'

const Register = ({setUser}) => {
  const [formData, updateFormData] = useState({});

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setUser(formData);
  };
  return (
    <div class="page-wrapper bg-blue p-t-100 p-b-100 font-robo">
      <div class="wrapper wrapper--w680">
        <div class="card card-1">
          <div class="card-heading"></div>
          <div class="card-body">
            <h2 class="title">Registration Info</h2>
            <form class="needs-validation" novalidate>
              <div class="form-row">
                <div class="col-md-4 mb-3">
                  <label for="validationCustom01">First name</label>
                  <input
                    type="text"
                    name="Fname"
                    class="form-control"
                    id="validationCustom01"
                    placeholder="First name"
                    value="Mark"
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="validationCustom02">Last name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom02"
                    placeholder="Last name"
                    value="Otto"
                    name="Lname"
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="validationCustomUsername">Username</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroupPrepend">
                        @
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      id="validationCustomUsername"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      name="Uname"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                    <div class="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="validationCustom03">City</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom03"
                    placeholder="City"
                    name="City"
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  <div class="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="validationCustom04">State</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom04"
                    placeholder="State"
                    name="State"
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  <div class="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="validationCustom05">Zip</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom05"
                    placeholder="Zip"
                    name="Zip"
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  <div class="invalid-feedback">
                    Please provide a valid zip.
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    name="invalidCheck"
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  <label class="form-check-label" for="invalidCheck">
                    Agree to terms and conditions
                  </label>
                  <div class="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
              <button
                class="btn btn-primary btn-sm"
                type="submit"
                onClick={(e) => onSubmit(e)}
              >
                Submit form
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (data) => { console.log('hi in' , data); return dispatch(setUserData(data))}
  };
};
const mapStateToProps = (state) => ({
  User: state.userDetails,
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
