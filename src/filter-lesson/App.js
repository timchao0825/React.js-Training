import React, { Component } from 'react';

// 純前端作法
// import lessons from './lessons.json';

class App extends Component {
  state = {
    filter:'',
    // 純前端作法
    // lessons,
    lessons:[]
  }
  componentDidMount(){
    this.fetechLessons();
  }
  onChangeFilter = (e) => {
    const filter = e.target.value;
    this.setState({ filter } , this.fetechLessons());
  }

  fetechLessons = () => {
    let timer;
    clearTimeout(timer);
    timer = setTimeout(()=>{
      // 後端做法要開啟express server
      // yarn server 
      const {filter} = this.state;
      fetch(`/api/lessons/?filter=${filter}`)
      .then(rs=>rs.json())
      .then(lessons=>this.setState({lessons}));
    },400);
  }

  render() {
    const {filter,lessons} = this.state;
    // 純前端作法
    // const visibleLessons = lessons.filter((lesson)=>{
    //   return lesson.title
    //           .toLowerCase()
    //           .includes(filter.toLowerCase());
    // });
    return (
      <div>
        <input type="text" value={filter} onChange={this.onChangeFilter}/>
        <ul>
          {/* 純前端作法 */}
          {/* lessons 要改成 visibleLessons */}
          {lessons.map(
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