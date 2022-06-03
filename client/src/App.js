import { useEffect } from 'react';
import './styles/styles.scss';
import { Route, Routes } from 'react-router-dom';

// Components
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

// Hooks
import useUser from './hooks/useUser';
import useAuthenticate from './hooks/useAuthenticate';

function App() {
    const { isLogged } = useUser();

    const { auth } = useAuthenticate();

    useEffect(() => {
        if(!isLogged) auth();
    },[])

    const loggedRoutes = 
        <>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="*" element={<h1>Home Page</h1>} />
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
