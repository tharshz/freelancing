import React, {useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
      <div className="container">
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div class="jumbotron Freelance__Jumbotron">
            <h1 class="Freelancer__Page__Jumbotron__Head">Pick the <br/> best one for <br/>your projects</h1>
          </div>
<div className="container">
          <div className='profiles'>
            {profiles.length > 0 ? (
              profiles.map(profile => (
                <ProfileItem key={profile._id} profile={profile} />
                
              ))
               
            ) : (
              <h4>No profiles found...</h4>
         
            )}
            
          </div>
        </div>
          </div>
      )}
    </div>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
