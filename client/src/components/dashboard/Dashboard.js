import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <div className="container-fluid">
    <div className="container">
      <div className="row">
          <div className="col-lg-1">

          </div>

          <div className="col-lg-10 Dashbord__Cont">
          <Fragment>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
          

          <div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteAccount()}>
              <i className="fas fa-user-minus" /> Delete My Account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className="container-fluid mt-5 mb-5">
          <div className="row">
          {/* <p>You Want To Have Join The Freelancer yet setup a profile, please add some info</p> */}
          <div>
          <Link to="/create-profile" className="btn btn-primary Freelance__Button">
          Become a Freelancer
          </Link>
          <Link to="/profiles" className="btn btn-primary Freelance__Button">
          Hire a Freelancer
          </Link>
          </div>
          <div className="col-lg-6">
            <img className="Profile__Update__Img" src="https://gist.githubusercontent.com/prashankhan/d41dc09a37f1bd660527ff0a876949fa/raw/8583275cfcd9e444b2d86dbb19c2b6745b7fc589/update.svg" alt="img2"></img>
        </div>
          </div>
          </div>
        </Fragment>
      )}
    </Fragment>
          </div>

          <div className="col-lg-1">

          </div>
      </div>
    </div>
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
