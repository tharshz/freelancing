import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar }
  }
}) => {
  return (
    <div className='Freelance__DEtail__Page__Div p-2'>
      <img className='Feeelance__Detail__Page__Image text-center mx-auto d-block' src={avatar} alt='' />
      <h1 className='Freelance__Detail__Page__Name text-center mt-1'>{name}</h1>
      <p className='Freelance__Detail__Page__Company text-center'>
        {status} {company && <span> at {company}</span>}
      </p>
      <p className='Freelance__Detail__Page__Location mx-auto'>{location && <span>{location}</span>}</p>
      <div className=' text-center'>
        {website && (
          <a href={website} target='_blank' rel='noopener noreferrer'>
            <i className='fas fa-globe Feelance__Detail__Page__Icons' />
          </a>
        )}
        {social && social.twitter && (
          <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-twitter Feelance__Detail__Page__Icons' />
          </a>
        )}
        {social && social.facebook && (
          <a href={social.facebook} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-facebook Feelance__Detail__Page__Icons' />
          </a>
        )}
        {social && social.linkedin && (
          <a href={social.linkedin} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-linkedin Feelance__Detail__Page__Icons' />
          </a>
        )}
        {social && social.youtube && (
          <a href={social.youtube} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-youtube Feelance__Detail__Page__Icons' />
          </a>
        )}
        {social && social.instagram && (
          <a href={social.instagram} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-whatsapp Feelance__Detail__Page__Icons' />
          </a>
        )}
         {/* {social && social.whatsapp && (
          <a href={social.whatsapp} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-whatsapp fa-2x' />
          </a>
        )} */}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;
