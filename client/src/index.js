import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import axios from 'axios';
import { UserContextProvider } from './components/Login/context/userContext';

axios.defaults.baseURL = "http://localhost:3001";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
      <UserContextProvider>
        <App />
      </UserContextProvider>
      </Router>
    </React.StrictMode>
  </Provider>
);
