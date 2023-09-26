import { Container, Typography, Button, TextField } from '@mui/material';
import GoogleButton from '../components/GoogleButton';

function Login() {
  return (
    <>
    <div className="Login-main-container">
        {/* Left side  */}
        <div className='left-login-side'>
         <h2>Login</h2>
          <h4>Find The start-Ups</h4>
          <GoogleButton/>
          
          <TextField label="Email" />
          <TextField label="Password"  />
          <h4>Forget Password?</h4>
          <button>Log in</button>
          <h3>Not registered? <span>Create an Account</span></h3>
        </div>
        {/* Right Side  */}
        <div>
          
        </div>
    </div>
    </>
  )
}

export default Login