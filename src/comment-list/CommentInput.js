import React, { Component } from "react";

class commentInput extends Component {
  state = {
    username: "",
    content: "",
  };
  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  handleContentChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  listsubmit = (e) => {
    e.preventDefault();
    if (this.props.onSubmit) {
      const { username, content } = this.state;
      if (!username) return console.log("請輸入使用者名稱");
      if (!content) return console.log("請輸入評論內容");
      if (username !== "" && content !== "") {
        this.props.onSubmit({ username, content });
        this.setState({ username: "", content: "" });
      }
    }
  };
  render() {
    const { username, content } = this.state;
    return (
      <div>
        <h3>Comment Input</h3>
        <hr />
        <form className="comment-input">
          <div className="comment-field">
            <span className="comment-field-name">姓名：</span>
            <div className="comment-field-input">
              <input
                required
                onChange={this.handleUsernameChange}
                value={username}
              />
            </div>
          </div>
          <div className="comment-field">
            <span className="comment-field-name">評論內容：</span>
            <div className="comment-field-input">
              <textarea
                required
                onChange={this.handleContentChange}
                value={content}
              />
            </div>
          </div>
          <button onClick={this.listsubmit} className="comment-field-button">
            留言
          </button>
        </form>
      </div>
    );
  }
}

export default commentInput;
