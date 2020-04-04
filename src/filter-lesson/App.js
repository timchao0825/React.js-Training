import React, { Component } from 'react';

import lessons from './lessons.json';

class App extends Component {
  state = {
    filter:'',
    lessons,
  }
  onChangeFilter = (e) => {
    this.setState({
      filter:e.target.value,
    })
  }
  render() {
    const {filter,lessons} = this.state;
    // 純前端作法
    const visibleLessons = lessons.filter((lesson)=>{
      return lesson.title
              .toLowerCase()
              .includes(filter.toLowerCase());
    });
    return (
      <div>
        <input type="text" value={filter} onChange={this.onChangeFilter}/>
        <ul>
          {visibleLessons.map(
            (lesson)=>{
              return <li key={lesson.id}>{lesson.title}</li>
            }
          )}
        </ul>
      </div>
    );
  }
}

export default App;