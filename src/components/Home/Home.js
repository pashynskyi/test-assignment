import React from 'react';
import MainBanner from './MainBanner/MainBanner';
import AboutMe from './AboutMe/AboutMe';
import UsersContainer from './Users/UsersContainer';

const Home = () => {
  return (
    <section>
      <MainBanner />
      <AboutMe />
      <UsersContainer />
    </section>
  )
}

export default Home;