import React from 'react';
import '../../App.css';
import './style.css';

export const SignUp = () => {
  return(
  <center>
  <div>
      <h1><b>Create an Account</b></h1>
      <div class="signup-box">
          <div class="left-box">
              <form>
                  <input type="text" placeholder="Your Name" required class="input-box"/>
                  <input type="text" placeholder="Username" required class="input-box"/>
                  <input type="email" placeholder="Your email id" required class="input-box"/>
                  <input type="password" placeholder="Create Password" required class="input-box"/>
                  <input type="checkbox" id="terms"/>
                  <label for="terms">I accept the terms & conditions.</label>
                  <a href='/' className='btn btn-outline-success'><button type='submit'>SIGN UP <span>&#x27f6;</span></button></a>
              </form>
          </div>
          <div class="right-box">
              <a href="" class="fb-link"><i class="fab fa-facebook-f"></i> Connect with Facebook</a>
              <a href="" class="tw-link"><i class="fab fa-twitter"></i> Connect with Twitter</a>
              <a href="" class="g-link"><i class="fab fa-google"></i> Connect with Google</a>
          </div>
      </div>
      <p class="login-msg">I already have an account? <a href="#">Login Now</a></p>

  </div>
  </center>
);
};
export default SignUp;


