import React from 'react';
import Customer from '../Customer/Customer';
import Form from '../Form/Form';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
           <Hero></Hero>
           <Services></Services>
           <Customer></Customer>
           <Testimonial></Testimonial>
           <Form></Form>
        </div>
    );
};

export default Home;