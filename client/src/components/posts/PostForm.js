import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');

  return (
    <div className='container'>
    <div className='post-form'>
      <div className=''>
        <h3 className="text-primary mt-5">Start a Discussion topic.</h3>
      </div>
      <form
        className='form mb-5 '
        onSubmit={e => {
          e.preventDefault();
          addPost({ text });
          setText('');
        }}
      >
        <textarea
          name='text'
          className="form-control"
          placeholder='Create a post'
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <input type='submit' className='btn mt-1 Freelance__Forum__Butoon' value='Post Now' />
      </form>
    </div>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(PostForm);
