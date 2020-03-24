import React, { Component } from 'react';
import style from './ChatRoom.module.scss';
class AppChatRoom extends Component {
  state = {
    text: '',
    content: [],
  }
  onChangeText = (e) => {
    this.setState({
      text: e.target.value,
    })
  }
  submit = (e) => {
    e.preventDefault();
    const { text, content } = this.state;
    this.setState({
      text: '',
      content: [{id:Date.now(),text}, ...content],
    })
  }
  render() {
    const { text, content } = this.state;
    return (
      <section className={style.chatForm}>
        <h2 className={style.colorRed}>Chat Room</h2>
        <form onSubmit={this.submit}>
          <input className={style.input} value={text} onChange={this.onChangeText} type="text" placeholder="please enter some text"/>
          <button className={style.submit} type="submit">送出</button>
        </form>
        <ul className={style.message}>
          {content.map(
            (item)=>{
              return <li key={item.id}>{item.text}</li>;
            }
          )}
        </ul>
      </section>
    );
  }
}

export default AppChatRoom;