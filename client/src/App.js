import './styles/styles.scss';
import { Route, Routes } from 'react-router-dom';

// Components
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

// Hooks
import useUser from './hooks/useUser';
import useAuthenticate from './hooks/useAuthenticate';
import Home from './components/Home';

function App() {
    const { isLogged } = useUser();

    const { auth, token } = useAuthenticate();

    if(!isLogged && token) auth();

    const loggedRoutes = 
        <>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
        </>
    const noLoggedRoutes = 
        <>
            <Route path="/register" element={<SignUp />} /> 
            <Route path="/login" element={<SignIn />} /> 
            <Route path="*" element={<SignIn />} />
        </>
    return (
        <div className="App">
        <Routes>
            {isLogged ? loggedRoutes : noLoggedRoutes}        
        </Routes>
        </div>
  );
}

export default App;
