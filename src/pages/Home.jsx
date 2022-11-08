import React from 'react';

import CarSlider from '../components/UI/CarSlider';
import Helmet from '../components/Helmet/Helmet';

const Home = () => {
    return (
    <Helmet title ="Home">
        <section className='p-0 car__slider-section'>
            <CarSlider />
        </section>
    </Helmet>)
};

export default  Home;