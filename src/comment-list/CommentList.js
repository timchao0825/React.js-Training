import React, { Component } from "react";
import Comment from "./Comment";
class commentList extends Component {
  render() {
    return (
      <div>
        <h3>Comment List</h3>
        <hr />
        <div className="comment-list-wrap">
          {this.props.comments.map((comment, i) => (
            <Comment comment={comment} key={i} />
          ))}
        </div>
      </div>
    );
  }
}

export default commentList;
