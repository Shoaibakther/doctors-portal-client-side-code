import React from 'react';
import './Tecno.css'

const Tecno = ({ tec }) => {
    const { name, img, info } = tec;
    return (
        <div className="tech">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{info.slice(0, 200)}</p>
        </div>
    );
};

export default Tecno;
