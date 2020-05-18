import React from "react";
import { connect } from "react-redux";
import { getUserData } from "../../actions";
import { push } from "connected-react-router";
import "./LoginPage.css";
const LoginPage = ({ goback, getUser, User }) => {
  return (
    <div className="contanier">
      <button className="btn btn-primary" onClick={goback}>Back</button>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-2"></div>
          <div className="col-lg-6 col-md-8 login-box">
            <div className="col-lg-12 login-key">
              <i className="fa fa-key" aria-hidden="true"></i>
            </div>
            <div className="col-lg-12 login-title">Noumena Login</div>
            <div className="col-lg-12 login-form">
              <div className="col-lg-12 login-form">
                <form>
                  <div className="form-group">
                    <label className="form-control-label">USERNAME</label>
                    <input type="text" className="login-input form-control" />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">PASSWORD</label>
                    <input type="password" className="form-control" i />
                  </div>

                  <div className="col-lg-12 loginbttm">
                    <div className="col-lg-6 login-btm login-text"></div>
                    <div className="col-lg-6 login-btm login-button">
                      <button type="submit" className="btn btn-outline-primary">
                        LOGIN
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUserData()),
    goback: () => dispatch(push('/')),
  };
};
const mapStateToProps = (state) => ({
  User: state.userDetails,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
