import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import "./index.css";
import { AppRouter } from './AppRouter';
import './firebase';



ReactDOM.render(
    <AppRouter />,
  document.getElementById('root')
);


