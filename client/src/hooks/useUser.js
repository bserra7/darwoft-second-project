import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../redux/actions';

const useUser = () => {
    const dispatch = useDispatch();
    const reduxUser = useSelector(state => state.userLogged);

    const logout = () => {
        localStorage.removeItem('jwt');
        sessionStorage.removeItem('jwt');
        dispatch(logoutUser());
    }

    return {
        isLogged: Boolean(reduxUser),
        logout
    }
}

export default useUser