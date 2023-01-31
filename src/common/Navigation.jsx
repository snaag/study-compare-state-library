import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <Link to="">Home (todo-list)</Link>
            <br/>
            <Link to="statistics">Statistics</Link>
        </nav>
    );
};

export default Navigation;
