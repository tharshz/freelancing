import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-6">
        <img className="Landing__Container__Left__IMG" src="https://gist.githubusercontent.com/prashankhan/4b0ed4bcf993a306570795e1f7a8edd4/raw/79d3e7204c3a43a5b41faa8bd51d88e45ebe5176/thars.svg" alt="img1"></img>
        
      </div>
      <div className="col-lg-6">
          <h1 className="Landing__Col__Right__Text">The No.1
            <br/>Platform for
            <br/>Freelancers in 
            <br/>SriLanka
            
          </h1>

          <button className="btn btn-primary my__Btn2 btn-block Landing__Col__Right__Button" > <Link className="nav-link My__Nav__Link__Button" to="/register">Let's Get Started</Link></button>
      </div>
    </div>
  </div>

  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
