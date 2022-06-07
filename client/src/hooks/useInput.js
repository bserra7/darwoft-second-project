import { useState } from 'react'
import validate from '../utils/validate';

const useInput = (name) => {
    const [ error, setError ] = useState('');
    const [ input, setInput ] = useState('');
    const [ validity, setValidity ] = useState(false);

    const handleError = () => {
        setError(validate(input, name));
        if(!error && input) setValidity(true);
    }
    const handleInput = (event) => {
        if(validity) setValidity(false);
        setError('');
        setInput(event.target.value);
    } 

    return {
        input,
        error,
        setError, 
        handleError,
        handleInput,
        validity
    }
}

export default useInput