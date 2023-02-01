import logo from './logo.svg';
import React from "react";
import './App.css';
import {Outlet} from "react-router-dom";
import Navigation from "./common/Navigation";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Outlet/>
        </div>
    );
}

export default App;
