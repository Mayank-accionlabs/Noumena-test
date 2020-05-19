import React from "react";
import { connect } from "react-redux";
import { getUserData } from "../../actions";
import { push } from "connected-react-router";
import FormInput from "../../components/Input/Input";
import "./LoginPage.css";
const LoginPage = ({ goback, getUser, User }) => {
  return (
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <h3 className="login-heading mb-4">Welcome back!</h3>
                  <form>
                    <FormInput
                      name="Email"
                      type="email"
                      handleChange={""}
                      value={""}
                      label="Email or Phone"
                      required
                    />
                    <FormInput
                      name="Password"
                      type="password"
                      handleChange={""}
                      value={""}
                      label="Password"
                      required
                    />
                    <div className="custom-control custom-checkbox mb-3">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        for="customCheck1"
                      >
                        Remember password
                      </label>
                    </div>
                    <button
                      className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                      type="submit"
                    >
                      Sign in
                    </button>
                    <div className="text-center">
                      <a className="small" href="#">
                        Forgot password?
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUserData()),
    goback: () => dispatch(push("/")),
  };
};
const mapStateToProps = (state) => ({
  User: state.userDetails,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
