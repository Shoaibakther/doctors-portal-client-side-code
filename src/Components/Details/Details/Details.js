import React from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { detailsId } = useParams();
    return (
        <div>
            <h2>This is details {detailsId}</h2>
        </div>
    );
};

export default Details;