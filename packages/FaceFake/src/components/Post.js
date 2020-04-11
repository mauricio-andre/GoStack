import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types'

function Post({ post }) {
  return (
    <div className="post-container">
      <div className="post-header">
        <img
          className="avatar"
          title={`Avatar ${post.author.name}`}
          src={`./assets/profile/${post.author.avatar}`}
        />
        <div className="post-text">
          <label>{post.author.name}</label>
          <span>{post.date}</span>
        </div>
      </div>
      <div className="post-content">{post.content}</div>
      <div className="commentlist">
        {post.comments.map(comment => <Comment key={comment.id} comment={comment} />)}
      </div>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.shape({
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }),
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    comments: PropTypes.array
  }),
}

export default Post;
