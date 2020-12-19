import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment }) {
  return (
    <div className="comment-container">
      <img
        alt={`Imagem de perfil do usuário ${comment.author.name}`}
        className="avatar"
        title={`Avatar ${comment.author.name}`}
        src={`./assets/profile/${comment.author.avatar}`}
      />
      <div className="comment-content">
        <p>
          <strong>{comment.author.name} </strong>
          {comment.content}
        </p>
      </div>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }),
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
