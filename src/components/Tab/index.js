import React from 'react';
import { Link } from 'react-router-dom';

const Tab = (props) => {
    const linkName = props.tabName.trim().replaceAll(" ", "");
    
    return (
        <Link className="btn btn-lg" to={`/${linkName}`}>
            {props.tabName}
        </Link>
    )
};

export default Tab;