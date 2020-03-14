import React, { Component } from 'react';
import Card from './Card';
import lessonReact from './lesson-react.json';

class InfoCard extends Component {
  state = {
  }
  render() {
    return (
      <div>
        <Card data={lessonReact} />
      </div>
    );
  }
}

export default InfoCard;