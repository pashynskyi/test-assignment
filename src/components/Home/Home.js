import React from 'react';
import MainBanner from './MainBanner/MainBanner';
import AboutMe from './AboutMe/AboutMe';
import UsersContainer from './Users/UsersContainer';
import RegisterContainer from './Register/RegisterContainer';

const Home = () => {
  return (
    <section>
      <MainBanner />
      <AboutMe />
      <UsersContainer />
      <RegisterContainer />
    </section>
  )
}

export default Home;