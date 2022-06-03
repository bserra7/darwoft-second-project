import React, { useState } from 'react'
import useInput from '../../hooks/useInput';

const FormInput = ({name, storeForm}) => {
    const type = name === 'password' ? 'password' : name === 'birthday' ? 'date' : 'text';
    const label = name[0].toUpperCase() + name.slice(1);

    const [ input, setInput ] = useState({
        [name]: ''
    })

    const { errors, handleErrors, setErrors } = useInput(input, name, storeForm);

    const handleInput = (event) => {
        setErrors({});
        setInput({
            [event.target.name]: event.target.value}
        );
    }   

  return (
    <div>
        <label>{label}: </label>
        <input type={type} name={name} onChange={handleInput} value={input[name]} onBlur={handleErrors} />
        <span>{errors[name]}</span>
    </div>
  )
}

export default FormInput