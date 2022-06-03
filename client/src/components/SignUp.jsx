import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../redux/actions';
import Form from './FormInput/Form';
import swal from 'sweetalert';
import useInput from '../hooks/useInput';

const SignUp = () => {
    const dispatch = useDispatch();
    const formData = useSelector(state => state.registerForm);
    const inputs = ['email', 'password', 'name', 'lastname', 'birthday', 'country'];

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(signUp(formData));
    }
    return (
        <div>
            <h1>Sign Up</h1>
            <Form name='Sign Up' inputs={inputs} handleSubmit={handleSubmit} storeForm={'registerForm'}/>
        </div>
  )
}

export default SignUp