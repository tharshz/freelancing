import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
//import Alert from '../layout/Alert';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
    // freelancer:'v1'
  });

  const { name, email, password, password2} = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
    
  }

  return (
    <div className="container-fluid">
    <Fragment>
    <div className="row">

<div className="col-lg-6 Rgistration__Page__Col_6__Right">
<h1 className="Login__Page__Left__Col__Text1">Let's Begin<br/>Your Freelancing<br/>Journey With<br/> SEDORK </h1>
</div>

  <div className="col-lg-6">
      <div className="container my__Signup__Cont">
      <h3 className="my__Signin__Head">Sign Up</h3>
      <form className="form" onSubmit={onSubmit}>
        {/* <div className="form-group">
          <select name="freelance" value={freelancer} onChange={onchange}>
            <option value="v1" >Freelancer</option>
            <option value="v2">Client</option>
          </select>
        </div> */}
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            className="form-control"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            className="form-control"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary my__Btn2 btn-block" value="Let's Get Started" />
      </form>
      <p className="my__Signin__Botom__Text">
        Already have an account? <Link className="my__Signin__Link" to="/login">Sign In</Link>
      </p>
      </div>
      </div>
      </div>
    </Fragment>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
