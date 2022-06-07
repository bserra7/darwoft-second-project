import axios from 'axios';
import swal from 'sweetalert';

export const COMPLETE_INPUT = 'COMPLETE_INPUT';
export const LOG_USER = 'LOG_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const CLEAR_STORE = 'CLEAR_STORE';

const swalError = (error) => {
    swal({
        title: error.response.data.error,
        text: '',
        timer: 3000,
        icon: 'warning'
    })
}

export const signUp = (user) => {
    return async (dispatch) => {
        try {
            const formData = new FormData();
            Object.keys(user).forEach(property => formData.append(property, user[property]))
            const { data } = await axios.post('/user/register', formData);
            if(data.success) {
                swal({
                    title: data.response,
                    text: '',
                    timer: 3000,
                    icon: 'success'
                })
            }
        } catch (error) {
            swalError(error);
        }
    }
}

export const signIn = (formData) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('/user/login', { email: formData.email, pass: formData.password });
            if(data.success) {
                localStorage.setItem('jwt', data.response.signature)
                dispatch({ type: LOG_USER, payload: data.response });
            }
        } catch (error) {
            swalError(error);
        }
    }
}

export const authenticate = (token) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('/user/authenticate', { 
                headers: {
                'Authorization': `Bearer ${token}`
                }
            })
            if(data.success){
                dispatch({ type: LOG_USER, payload: { signature: token, user: data.response }});
            }
        } catch (error) {
            localStorage.removeItem('jwt')
            swalError(error);
        }
    }
}

export const logoutUser = () => {
    return {
        type: LOGOUT_USER
    }
}