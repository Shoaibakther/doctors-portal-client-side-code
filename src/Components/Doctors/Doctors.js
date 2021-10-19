import React from 'react';

const Doctors = ({ doctors }) => {
    const { name, img, info } = doctors;
    return (
        <div>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{info}</p>
        </div>
    );
};

export default Doctors;