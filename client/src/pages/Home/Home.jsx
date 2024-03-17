import React from 'react';

import Aside from '../../components/Aside/Aside';
import Header from '../../components/Header/Header';
import HomeSearch from '../../components/HomeSearch/HomeSearch';

const Home = () => {
  return (
    <div className='home'>
        <Aside />
        <div className="container">
            <Header />
            <HomeSearch/>
        </div>
    </div>
  )
}

export default Home;