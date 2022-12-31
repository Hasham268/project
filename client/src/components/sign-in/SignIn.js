import './SignIn.css'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from "../../actions/auth";

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const SignIn = () => {
  const [form, setForm] = useState(initialState);
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();
  const history = useNavigate();


  const switchMode = () => {
    setForm(initialState);
    setIsSignUp((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
    // handleShowPassword(false);
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(signup(form, history));
    
    } else {
      dispatch(signin(form, history));
      
    }
    
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
      <>
      <div id="myModal" className="popup">

        <div className="modal-content">
          <div className="modal-header">
          
            <h2 className='Sign-In'>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
              <form onSubmit = {handleSubmit} >
                        {
                              isSignUp &&(
                              <>
                                  <label className='lable'>First Name:
                                  <input className='lable-input' name="firstName" type="text" onChange={handleChange}/>
                                  </label>
                                  <label className='lable'>Last Name:
                                    <input className='lable-input' name="lastName" type="text" onChange={handleChange}/>
                                  </label>
                              </>)
                          }
                          <label className='lable'>Email:
                          <input className='lable-input' name="email" type="email" onChange={handleChange}/>
                        </label>
                        <label className='lable'>Password:
                          <input className='lable-input' name="password" type={showPassword ? 'text' : 'password'} onChange={handleChange} handleShowPassword={handleShowPassword}/>
                        </label>
                        {isSignUp && 
                        <label className='lable'>Repeat Password:
                        <input className='lable-input' name="confirmPassword" type="password" onChange={handleChange}/>
                        </label>
                        }
                        
                <button type="submit" class="login-btn" >{isSignUp ? 'Sign Up' : 'Sign In'}</button>
                <button onClick={switchMode} class="login-btn">{isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}</button>
              </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;

