import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../redux/actions';
import Form from './FormInput/Form';

const SignIn = () => {
  const dispatch = useDispatch();
  const formData = useSelector(state => state.loginForm);
  const inputs = ['email', 'password'];

  const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(signIn(formData));
  }
  return (
      <div>
          <h1>Sign In</h1>
          <Form name='Sign In' inputs={inputs} handleSubmit={handleSubmit} storeForm={'loginForm'}/>
      </div>
)
}

export default SignIn