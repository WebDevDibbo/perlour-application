import React from 'react';
import Customer from '../Customer/Customer';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
        <Hero></Hero>
        <Services></Services>
        <Customer></Customer>
        </div>
    );
};

export default Home;