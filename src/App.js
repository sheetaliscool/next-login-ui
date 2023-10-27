import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/Login/Login';
import useToken from './components/useToken';


function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <Outlet/>
    </div>
  );
}

export default App;
