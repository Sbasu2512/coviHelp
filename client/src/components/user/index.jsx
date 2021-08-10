import  './style.css';

import { useEffect, useState } from "react";

import axios from 'axios'


const User = (props) => {

  const [state, setState] = useState(null);
  
  useEffect(() => {
    axios.get('https://randomuser.me/api/')
     .then(res => setState({...state, user: res.data.results[0]}));
  }, [])
  
  return (
    <div className='userContainer'>
      {state && <img className='userPic' src={state.user.picture.medium} alt='User'/>}
      {state && 
        <div classNAme='userData' style={{textAlign: 'left'}}>
          <div><strong className='userName'>{state.user.name.first} {state.user.name.last}</strong></div>
          <div>Ottawa, Ontario</div>
          <div><strong className='positive'>Positive🤒</strong></div>
        </div>
      }
    </div>
  );
}

export default User;