import React, { Component } from "react";
import Course from "./Course.js";
const api = "https://api.hiskio.com/v1/courses?profession_id=1";
class App extends Component {
  state = {
    courses: [],
    next:null,
    loading:true,
  };
  componentDidMount() {
    this.fetchData(api);
    window.addEventListener('scroll',this.onScroll);
  }
  componentWillUnmount() {
    window.addEventListener('scroll',this.onScroll);
  }
  onScroll = () =>{
    const { next , loading } = this.state;
    if(loading) return;
    if(!next) return;
    if(window.scrollY + window.innerHeight >= document.body.scrollHeight - 100){
      console.log('scroll down')
      // load next
      this.fetchData(next);
    }
  }
  fetchData = (url) => {
    this.setState({
      loading:true,
    })
    fetch(url)
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      this.setState({
        courses: [...this.state.courses , ...data.data],
        next: data.links.next,
        loading:false,
      });
    });
  }
  render() {
    const { courses } = this.state;
    return (
      <div>
        {courses.map(course => {
          console.log(course);
          return <Course key={course.id} {...course} />;
        })}
      </div>
    );
  }
}

export default App;
