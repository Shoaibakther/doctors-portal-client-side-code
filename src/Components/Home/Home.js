import React from 'react';
import Banner from '../Banner/Banner';
import Doctor from '../Doctor/Doctor';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import Technology from '../Technology/Technology';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Technology></Technology>
            <Doctor></Doctor>
            <Footer></Footer>
        </div>
    );
};

export default Home;