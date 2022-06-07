import React from 'react'
import { useSelector } from 'react-redux'
import FormInput from './FormInput'
import FormInputImage from './FormInputImage';

const Form = ({ name, image, inputs, handleSubmit, handleImage, storeForm}) => {
    const form = useSelector(state => state[storeForm]);
    const invalid = Object.values(form)?.some(value => !value);
    return (
        <form onSubmit={handleSubmit}>
            {inputs.map(input => <FormInput name={input} storeForm={storeForm} />)}
            {image && <FormInputImage storeForm={storeForm} handleImage={handleImage} />}
            <button type='submit' disabled={invalid}>{name}</button>
        </form>
    )
}

export default Form