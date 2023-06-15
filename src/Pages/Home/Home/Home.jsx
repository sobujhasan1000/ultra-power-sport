import React from 'react';
import Banner from '../Bannar/Banner';
import PopularClass from '../PopularCalss/PopularClass';
import PopularInstractor from '../PopularInstractor/PopularInstractor';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstractor></PopularInstractor>
        </div>
    );
};

export default Home;