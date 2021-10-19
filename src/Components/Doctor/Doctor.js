import React, { useEffect, useState } from 'react';
import Doctors from '../Doctors/Doctors';
import './Doctor.css'
const Doctor = () => {
    const [doctor, setDoctor] = useState([])
    useEffect(() => {
        fetch('doctor.json')
        .then(res => res.json())
        .then(data => setDoctor(data))
    },[])
    return (
        <div id="doctor" className="mt-5">
            <h2>Best Doctors in Dhaka</h2>
            <div className="doctor-container mt-5">
                {
                    doctor.map(doctors =><Doctors doctors={doctors}></Doctors>)
                }
            </div>
        </div>
    );
};

export default Doctor;