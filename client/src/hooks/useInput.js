import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { COMPLETE_INPUT } from '../redux/actions';
import validate from '../utils/validate';

const useInput = (state, name, storeForm) => {
    const [ errors, setErrors ] = useState({});

    const dispatch = useDispatch();

    const handleErrors = (event) => {
        setErrors(validate({
            ...state,
            [event.target.name]: event.target.value
        }))
        if(!errors[name]) dispatch({ type: COMPLETE_INPUT, payload: { name, value: state[name], storeForm } })
    }

    return {
        errors, 
        setErrors, 
        handleErrors,
    }
}

export default useInput