import React, { Component } from "react";
import PropTypes from "prop-types";

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object,
  };

  render() {
    const { comment } = this.props;
    return (
      <div className="comment">
        <div className="comment-user">
          <span>{comment.username} </span> :<span>{comment.content}</span>
          <hr />
        </div>
      </div>
    );
  }
}

export default Comment;
