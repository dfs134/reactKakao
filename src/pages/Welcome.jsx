import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import * as SC from '../Css/StyleComp';
import welcomeCss from '../Css/welcome.css';

function Welcome() {
  
  const [emailPhone, setEmailPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const ChangeInput = (e) => {
    const { name, value } = e.target;
    if (name === 'emailPhone') {
      setEmailPhone(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

   const handleLoginClick = () => {
    if (!emailPhone || !password) {
      alert('아이디와 패스워드를 모두 입력해 주시오');
    } else {
      navigate('/List')
    }
  };
  
  return(
    <>
      <SC.TextCenter className='pd-20'>
        <div>
          <h3>Welcome to KakaoTalk</h3>
          <h5>if you have a Kakao Account,</h5>
          <h5>log in with your email or phone number.</h5>
        </div>
        <div>
          <ul className='pd-50'>
            <li><input type="text" name="emailPhone" value={emailPhone} onChange={ChangeInput} placeholder='Email or phone number' /></li>
            <li><input type="password" name="password" value={password} onChange={ChangeInput} placeholder='password' /></li>
          </ul>
          <ul>
            <li><button onClick={handleLoginClick}>Log In</button></li>
            <li><button>Sign Up</button></li>
          </ul>
          <SC.PT20>Find Kakao Account or Password</SC.PT20>
        </div>
      </SC.TextCenter>
    </>
  )
}

export default Welcome;