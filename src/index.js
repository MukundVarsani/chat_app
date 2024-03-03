import React from 'react';
import ReactDom from "react-dom";
import App from  './App';
import { BrowserRouter } from 'react-router-dom';
import "./index.css"
import { AuthContextProvider } from './context/AuthContext';
ReactDom.render(
<BrowserRouter >
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
</BrowserRouter>

, document.getElementById('root'));