import { useState } from 'react'
import validate from '../utils/registerValidate';

const useInput = (state) => {
    const [errors, setErrors] = useState({});

    const handleErrors = (event) => {
        setErrors(validate({
            ...state,
            [event.target.name]: event.target.value
        }))
    }

    return {
        errors, 
        setErrors, 
        handleErrors
    }
}

export default useInput