import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <ul className="navbar-nav ml-auto My__Navbar__UL">
      <li className="nav-item">
        <Link className="nav-link My__Nav__Link" to="/profiles">Freelancer</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link My__Nav__Link" to="/posts">Forum</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link My__Nav__Link" to="/dashboard">
          <i className="" />{' '}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link My__Nav__Link" onClick={logout} href="#!">
          <i className="" />{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="navbar-nav ml-auto My__Navbar__UL">
      {/* <li className="nav-item">
        <Link className="nav-link My__Nav__Link" to="/About">About us</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link My__Nav__Link" to="/register">Register</Link>
      </li> */}
      <li className="nav-item">
        <Link className="nav-link My__Nav__Link__Button" to="/register">Hire a Freelancer</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link My__Nav__Link__Button" to="/dashboard">Become a Freelancer</Link>
      </li>
    </ul>
    
  );

  return (
     <div className="container-fluid My__Navbar__Container">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light My__Navbar">
        <a className="navbar-brand" href="/"><img style={{width: "130px"}} src="https://gist.githubusercontent.com/prashankhan/ec9fe8095adc30cacf33735b7d5d5853/raw/84e264cac80b2e1b1dfaf59e12c32ea9ae5d10ad/SEDork%2520logo.svg" alt="img3"></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {isAuthenticated ? authLinks : guestLinks}
      </div>
    </nav>
      </div>
     </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
