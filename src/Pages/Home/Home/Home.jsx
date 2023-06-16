import React from 'react';
import Banner from '../Bannar/Banner';
import PopularClass from '../PopularCalss/PopularClass';
import PopularInstractor from '../PopularInstractor/PopularInstractor';
import Thismonth from '../../Ournews/Thismonth';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstractor></PopularInstractor>
            <Thismonth></Thismonth>
        </div>
    );
};

export default Home;