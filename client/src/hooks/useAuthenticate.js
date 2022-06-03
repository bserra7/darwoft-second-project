import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "../redux/actions";

export default function useAuthenticate (){
    const dispatch = useDispatch();
    const userLogged = useSelector(state => state.userLogged);

    const token = localStorage.getItem('jwt') || userLogged?.signature;

    const auth = () => {
        dispatch(authenticate(token));
    }
        
    return {
      auth,
    }
}