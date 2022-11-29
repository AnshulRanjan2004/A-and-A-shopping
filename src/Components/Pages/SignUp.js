import React from 'react';
import '../../App.css';
import './style.css';
//import SignUpBack from './SignUpback';

class SignUp extends React.Component{
  render(){
  return(
  <center>
  <div>
      <h1><b>Create an Account</b></h1>
      <div class="signup-box">
          <div class="left-box">
              <form id="reg-form">
                  <input type="text" placeholder="Username" autocomplete="off" id='username'class="input-box"/><br></br>
                  <input type="password" placeholder="Password" required id='password' autocomplete="off"class="input-box"/><br></br>
                  <input type="checkbox" id="terms"/>
                  <label for="terms">I accept the terms & conditions.</label>
                  <br></br><a href='/' className='btn btn-outline-success'>Go Back to Home</a>
                  <button type='submit'>SIGN UP <span>&#x27f6;</span></button>               
              </form>
          </div>
          <div class="right-box">
              <a href="https://www.facebook.com/" class="fb-link"><i class="fab fa-facebook-f"></i> Connect with Facebook</a>
              <a href="https://twitter.com/login" class="tw-link"><i class="fab fa-twitter"></i> Connect with Twitter</a>
              <a href="https://www.google.co.in/" class="g-link"><i class="fab fa-google"></i> Connect with Google</a>
          </div>
      </div>
      <p class="login-msg">I already have an account? <b> Login Now</b></p>
  </div>
  </center>)
  };
componentDidMount(){
    const form = document.getElementById('reg-form')
    form.addEventListener('submit', registerUser)

    async function registerUser(event) {
        event.preventDefault()
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value

        const result = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        }).then((res) => res.json())

        if (result.status === 'ok') {
            // everythign went fine
            alert('Success')
        } else {
            alert(result.error)
        }
    }
}
};

export default SignUp;


