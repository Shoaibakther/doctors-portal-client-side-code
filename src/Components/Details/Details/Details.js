import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const Details = () => {
    const { detailsId } = useParams();
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])
    const singleUser =  user.find((user) => user.id === parseInt(detailsId));

    console.log(singleUser);
    return (
        <div className="mt-5">
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={singleUser?.img} />
  <Card.Body>
                    <Card.Title>{singleUser?.name}</Card.Title>
    <Card.Text>
                        {singleUser?.description}
    </Card.Text>
    
  </Card.Body>
</Card>
        
        </div>
    );
};

export default Details;