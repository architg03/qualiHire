import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarController from './Components/NavbarController';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  
  return(
    <NavbarController/>
  );
};

root.render(App());

