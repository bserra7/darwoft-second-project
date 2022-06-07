import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_STORE, signIn } from '../redux/actions';
import Form from './Form/Form';

const SignIn = () => {
  const dispatch = useDispatch();
  const formData = useSelector(state => state.loginForm);
  const inputs = ['email', 'password'];
  const storeForm = 'loginForm';

  const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(signIn(formData));
      dispatch({type: CLEAR_STORE, payload: storeForm})
  }
  return (
      <div>
          <h1>Sign In</h1>
          <Form name='Sign In' inputs={inputs} handleSubmit={handleSubmit} storeForm={storeForm}/>
      </div>
)
}

export default SignIn