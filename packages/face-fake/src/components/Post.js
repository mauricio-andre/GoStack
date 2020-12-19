import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

function Post({ post }) {
  return (
    <div className="post-container">
      <div className="post-header">
        <img
          className="avatar"
          alt={`Imagem de perfil do usuário ${post.author.name}`}
          title={`Avatar ${post.author.name}`}
          src={`./assets/profile/${post.author.avatar}`}
        />
        <div className="post-text">
          <strong>{post.author.name}</strong>
          <span>{post.date}</span>
        </div>
      </div>
      <div className="post-content">{post.content}</div>
      <div className="comment-list">
        {post.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }),
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf,
  }).isRequired,
};

export default Post;
