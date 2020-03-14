import React, { Component , PureComponent } from 'react';

// class component
// class Progressbar extends Component {
//   render() {
//     const {value} = this.props;
//     console.count('render');
//     console.log({value});
//     return (
//       <div className="bar-outer">
//         <div className="bar-inner" style={{width: `${value}%`}} />
//         <span className="percentage">{value}%</span>
//       </div>
//     );
//   }
// }

// functional component (stateless component)
// const Progressbar = (props) => {
//   const {value} = props;
//   // console.log({value});
//   return (
//     <div className="bar-outer">
//       <div 
//       className="bar-inner" 
//       style={{width: `${value}%`}} 
//       />
//       <span className="percentage">{value}%</span>
//     </div>
//   );
// };


class Progressbar extends PureComponent {
  render() {
    const {value} = this.props;
    
    return (
      <div className="bar-outer">
        <div className="bar-inner" style={{width: `${value}%`}} />
        <span className="percentage">{value}%</span>
      </div>
    );
  }
}

export default Progressbar;