import React, { Component } from "react";
import style from './Course.module.scss';
class Course extends Component {
  render() {
    const { title, headline , image , lecturers } = this.props;
    return (
      <div className={style.course}>
        <div className={style.cover} style={{
          backgroundImage:`url${image}`
        }}></div>
        <img src={image} className={style.cover} />
        <div className={style.info}>
          <h3 className={style.title}>{title}</h3>
          <h4 className={style.subtitle}>{headline}</h4>
          {lecturers.map((lecturers)=>{
            return <label>{lecturers.username}</label>
          })}
        </div>
      </div>
    );
  }
}

export default Course;
