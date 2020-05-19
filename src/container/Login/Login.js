import React from "react";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import './Login.css'
const login = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to={''}>
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to={"/login"}>
                Login <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/register"}>
                {" "}
                Register <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" href="#">
                Disabled
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className="card-heading"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(login);

