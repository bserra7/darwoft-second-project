import React from 'react'
import { useSelector } from 'react-redux'
import FormInput from './FormInput'

const Form = ({ name, inputs, handleSubmit, storeForm}) => {
    const form = useSelector(state => state[storeForm]);

    const invalid = Object.values(form)?.some(value => !value);

    return (
        <form onSubmit={handleSubmit}>
            {inputs.map(inputName => <FormInput name={inputName} storeForm={storeForm} />)}
            <button type='submit' disabled={invalid}>{name}</button>
        </form>
    )
}

export default Form