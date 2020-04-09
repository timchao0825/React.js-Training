import React, { Component , useState , useContext } from 'react';
import {Provider} from './Context';

import UseContextOpenButton from './UseContextOpenButton';

// origial class component
// class App extends Component {
//   state = {
//     open:false,
//   }
//   toggle = () =>{
//     console.log('button toggle');
//     this.setState({
//       open: !this.state.open,
//     })
//   }
//   render() {
//     const {open} = this.state;
//     const contextValue = {
//       open,
//       toggle:this.toggle
//     }
//     return (
//       <Provider value={contextValue}>
//         <div>
//           <h3>UseContext</h3>
//           <UseContextOpenButton />
//           {open ? <div>Context show</div>:null}
//         </div>
//       </Provider>

//     );
//   }
// }

const App = () => {
  const [open , setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const contextValue = {open , toggle}
  return(
    <Provider value={contextValue}>
      <div>
        <h3>UseContext</h3>
        <UseContextOpenButton />
        {open ? <div>Context show</div>:null}
      </div>
    </Provider>
  )
}


export default App;
