import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {id, name, img, description } = service;
    return (
        <div className="service">
            <img  src={img} alt="" />
            <h2>{name}</h2>
            <p>{description.slice(0, 200)}</p>
            <Link to={`/details/${id}`}>
            <button className=" btn btn-success mb-3 mt-3">Details {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;