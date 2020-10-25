import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills
  }
}) => {
  return (
 <div className="container">
      <div className="row">
      <div className="col-lg-2">

      </div>

      <div className="col-lg-8">
      <div className='Freelance__Profile__BG bg-light'>
      <div className="row">
      <div className="col-lg-3">
      <img src={avatar} alt='' className='Freelance__Round-Img' />
      </div>
      <div className="col-lg-9 Freelance__Profile__Detail">
        <h3 className="Freelance__Name">{name}</h3>
        <p className="Freelance__Work__Status">
          {status} {company && <span> at {company}</span>}
        </p>
        <div>
        {skills.slice(0, 4).map((skill, index) => (
          <p key={index} className='badge Freelance__Skill__Tags'>
            <i className='fas fa-check' /> {skill}
          </p>
        ))}
      </div>
        <p >From {location && <span className='Freelance__Location'>{location}</span>}</p>
        <div className="float-right Freelance__Button__div">
        <Link to={`/profile/${_id}`} className='btn btn-primary Freelance__Button'>
          View Profile
        </Link>
        <Link to={`/contact`} className='btn btn-primary Freelance__Button'>
          Hire Me
        </Link>
        </div>
      </div>
      
      </div>
    </div>
          </div>


      <div className="col-lg-2">

      </div>
      </div>
 </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
