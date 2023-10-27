import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.css';
import { redirect } from 'react-router-dom';

function setToken(userToken) {
  localStorage.setItem('token', JSON.stringify(userToken));
  sessionStorage.setItem('token', JSON.stringify(userToken));
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/login',
        element: <Login setToken={setToken} />,
      },      
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/preferences",
        element: <Preferences />,
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider
    router={router}
  />
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
