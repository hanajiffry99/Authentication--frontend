import React from 'react';
import { useNavigate,Link} from 'react-router-dom';

const LoginUsers = () => {

  const history = useNavigate();

  const handleSubmit = ()=>{
    history("/dashboard",{replace: true});
  }

  return (
    <>
      <h1>Login</h1>
      <button onClick={handleSubmit}>Submit</button>
      <div>Still no Account</div>
      <Link to ="/register">Create One</Link>
    </>
  )
}

export default LoginUsers