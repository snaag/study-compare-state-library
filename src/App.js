import React from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import Navigation from "./common/Navigation";

const App = () => {
    return (
        <div className="App">
            <Navigation/>
            <Outlet/>
        </div>
    );
};

export default App;
