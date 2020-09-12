import React, { Component } from "react";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import "./style.scss";

class commentApp extends Component {
  state = {
    comments: [],
  };
  handleSubmitComment = (comment) => {
    this.state.comments.push(comment);
    this.setState({
      comments: this.state.comments,
    });
  };
  render() {
    return (
      <div className="comment-wrap">
        <div className="comment-box">
          <h1>Comment App</h1>
          <CommentInput onSubmit={this.handleSubmitComment} />
          <CommentList comments={this.state.comments} />
        </div>
      </div>
    );
  }
}

export default commentApp;
