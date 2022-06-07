import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import useInput from '../../hooks/useInput';
import { COMPLETE_INPUT } from '../../redux/actions';

const FormInput = ({name, storeForm}) => {
    const type = name === 'password' ? 'password' : name === 'birthday' ? 'date' : 'text';
    const label = name[0].toUpperCase() + name.slice(1);

    const dispatch = useDispatch();

    const { input, error, handleError, handleInput, validity } = useInput(name);

    useEffect(() => {
      if(validity) dispatch({ type: COMPLETE_INPUT, payload: { name, value: input, storeForm } })
    }, [validity]) // eslint-disable-line

  return (
    <div>
        <label>{label}: </label>
        <input type={type} name={name} onChange={handleInput} value={input} onBlur={handleError} />
        <span>{error}</span>
    </div>
  )
}

export default FormInput