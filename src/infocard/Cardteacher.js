import React, { Component } from 'react';

// class Cardteacher extends Component {
//   render() {
//     const {name , link , image} = this.props.data;
//     return (
//       <div className="card__stat">
//         <a href={link} target="_blank">
//           <img src={image} alt=""/>
//           <span>{name}</span>
//         </a>
//       </div>
//     );
//   }
// }

const Cardteacher = (props) => {
  const {name , link , image} = props.data;
  return (
    <div className="card__stat">
      <a href={link} target="_blank">
        <img src={image} alt=""/>
        <span>{name}</span>
      </a>
    </div>
  );
}

export default Cardteacher;