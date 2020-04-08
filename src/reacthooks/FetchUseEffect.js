import React, {Component , useState , useEffect} from 'react';

// class FetchUseEffect extends Component {
//   state = {
//     email:'',
//     picture:''
//   }
//   componentDidMount() {
//     this.fetchUser();
//   }
  
//   fetchUser = () => { 
//     fetch('https://randomuser.me/api/')
//       .then(rs=>rs.json())
//       .then(
//         // rs => console.log(rs)
//         (rs) => {
//           const [user] = rs.results;
//           this.setState({
//             email:user.email,
//             picture:user.picture.medium
//           })
//         }
//       )
//   }
//   render() {
//     const{ email,picture} = this.state;
//     return (
//       <div>
//         <img src={picture} alt=""/>
//         <br/>
//         <h4>{email}</h4>
//       </div>
//     );
//   }
// }

const FetchUseEffect = () => {
  const [state,setState] = useState({
    email:'',
    picture:''
  })

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(rs=>rs.json())
      .then((rs) => {
        const [user] = rs.results;
        setState({
          email:user.email,
          picture:user.picture.medium
        })
      })
  }, []);

  const{email,picture} = state;
  return(
    <div>
      <img src={picture} alt=""/>
      <br/>
      <h4>{email}</h4>
    </div>
  )
}

export default FetchUseEffect;