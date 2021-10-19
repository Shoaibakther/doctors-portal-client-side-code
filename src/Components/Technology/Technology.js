import React, { useEffect, useState } from 'react';
import Tecno from '../Tecno/Tecno';
import './Technology.css'

const Technology = () => {
    const [tech, setTech] = useState([])
    useEffect(() => {
        fetch('technology.json')
        .then(res => res.json())
        .then(data => setTech(data))
    },[])
    return (
        <div id="technology">
            <h2 className="text-primary mt-5">Technology</h2>
            <div className="service-container">
                {
                    tech.map(tec => <Tecno tec={tec}></Tecno>)
            }
            </div>
        </div>
    );
};

export default Technology;