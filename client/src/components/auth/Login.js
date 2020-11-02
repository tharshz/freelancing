import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="container-fluid">
    <Fragment>
    <div className="row">

      <div className="col-lg-6 Login__Page__Col-6__Left">
     <h1 className="Login__Page__Left__Col__Text1">Now Freelancing<br/>Easy With<br/>SEDORK </h1>
        </div>
      
     
      <div className="col-lg-6">
      <div className="container my__Signin__Cont">
      <h3 className="my__Signin__Head">Sign In</h3>
     
     <form className="form" onSubmit={onSubmit}>
       <div className="form-group">
         <input
           type="email"
           className="form-control"
           placeholder="Email Address"
           name="email"
           value={email}
           onChange={onChange}
           required
         />
       </div>
       <div className="form-group">
         <input
           type="password"
           className="form-control"
           placeholder="Password"
           name="password"
           value={password}
           onChange={onChange}
           minLength="6"
         />
       </div>
       <input type="submit" className="btn btn-primary my__Btn2 btn-block" value="Let's Signin" />
       </form>
     
    
    
     <p className="my__Signin__Botom__Text">
       Don't have an account? <Link className="my__Signin__Link" to="/register">Sign Up</Link>
     </p>
      </div>
        
      </div>
        
      </div>
    </Fragment>
     </div>
     
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
