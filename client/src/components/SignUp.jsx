import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_STORE, signUp } from '../redux/actions';
import Form from './Form/Form';

const SignUp = () => {
    const dispatch = useDispatch();
    const formData = useSelector(state => state.registerForm);
    const inputs = ['email', 'password', 'name', 'lastname', 'birthday', 'country'];
    const [ image, setImage ] = useState('');
    const storeForm = 'registerForm';

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(signUp({ ...formData, image }));
        dispatch({type: CLEAR_STORE, payload: storeForm})
    }

    const handleImage = (event) => {
        setImage(event.target.files[0]);
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <Form name='Sign Up' image={true} inputs={inputs} handleSubmit={handleSubmit} handleImage={handleImage} storeForm={storeForm}/>
        </div>
  )
}

export default SignUp