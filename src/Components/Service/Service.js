import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const { name, img, description } = service;
    return (
        <div className="service">
            <img  src={img} alt="" />
            <h2>{name}</h2>
            <p>{description.slice(0, 200)}</p>
            <Link to=""><Button>Details</Button></Link>
        </div>
    );
};

export default Service;