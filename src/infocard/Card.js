import React, { Component } from 'react';
import Cardteacher from './Cardteacher'
import CardDesc from './Carddesc'
import './card.css'

// class Card extends Component {
//   render() {
//     const {
//       title,
//       desc,
//       like,
//       students,
//       price,
//       teacher,
//       video,
//     } = this.props.data;
//     return (
//       <div className="card">
//         <h2 className="card__title">{title}</h2>
//         <CardDesc data={desc} />
//         <div className="card__stat">
//           <label>好評</label>
//           <span>{like}</span>
//         </div>
//         <div className="card__stat">
//           <label>學生</label>
//           <div>{students}</div>
//         </div>
//         <div className="card__stat">
//           <label>價格</label>
//           <span>{price}</span>
//         </div>
//         <Cardteacher data={teacher}/>
//         <video
//         src={video.source} 
//         controls
//         />

//       </div>
//     );
//   }
// }

const Card = (props) => {
  const {
    title,
    desc,
    like,
    students,
    price,
    teacher,
    video,
  } = props.data;
  return (
    <div className="card">
      <h2 className="card__title">{title}</h2>
      <CardDesc data={desc} />
      <div className="card__stat">
        <label>好評</label>
        <span>{like}</span>
      </div>
      <div className="card__stat">
        <label>學生</label>
        <div>{students}</div>
      </div>
      <div className="card__stat">
        <label>價格</label>
        <span>{price}</span>
      </div>
      <Cardteacher data={teacher}/>
      <video
      src={video.source} 
      controls
      />
    </div>
  );
}

export default Card;