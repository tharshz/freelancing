import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions
}) => (
  <div className="Freelance__Post__Items__Div  p-1 m-1">
      <div className="row">

      <div className="col-lg-4">
      <Link to={`/profile/${user}`}>
        <img className='Freelance__Post__Items__Img' src={avatar} alt='' />
        <p className="Freelance__Post__Items__Name__Honor">Posted By:</p>
        <h4 className="Freelance__Post__Items__Name">{name}</h4>
      </Link>
       <p className='post-date'>
        Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
      </p>
    </div>


   
      <div className="col-lg-8 Feeelance__Post__Item__Col__8">
        
      <p className='Freelance__Post__ITem__Text'>{text}</p>

      
</div>

<div className="col-lg-12 Freelance__Post__Item__Col__12">
      {showActions && (
  <Fragment>
    <button
      onClick={() => addLike(_id)}
      type='button'
      className='btn btn-light Freelance__Linke__BTN'
    >
      <i className='fas fa-thumbs-up' />{' '}
      <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
    </button>
    <button
      onClick={() => removeLike(_id)}
      type='button'
      className='btn btn-light Freelance__Linke__BTN'
    >
      <i className='fas fa-thumbs-down' />
    </button>
    <Link to={`/posts/${_id}`} className='btn btn-primary Freelance__Discuss__BTN'>
      Discussion{' '}
      {comments.length > 0 && (
        <span className='comment-count'>{comments.length}</span>
      )}
    </Link>
    {!auth.loading && user === auth.user._id && (
      <button
        onClick={() => deletePost(_id)}
        type='button'
        className='btn btn-danger Freelance__Delete__BTN'
      >
        <i className='fas fa-times' />
      </button>
    )}
  </Fragment>
)}
      </div>
      </div>
      </div>
);

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addLike, removeLike, deletePost }
)(PostItem);
