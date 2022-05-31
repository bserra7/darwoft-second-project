import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userLogin } from "../redux/actions";

export default function useAuthenticate (){
    const dispatch = useDispatch();
    const history = useHistory();

    const [ auth, setAuth ] = useState(false);

    const token = sessionStorage.getItem('jwt') || localStorage.getItem('jwt');

    const authenticate = () => {
        axios.get('/authenticate', { 
            headers: {
            'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            dispatch(userLogin(res.data.response))
            setAuth(true);
        })
        .catch(res => {
            sessionStorage.removeItem('jwt');
            localStorage.removeItem('jwt');
            history.push('/');
        })
    }
        
      return {
          authenticate,
          auth
      }
}