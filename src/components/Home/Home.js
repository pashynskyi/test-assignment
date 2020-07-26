import React from 'react';
import MainBanner from './MainBanner/MainBanner';
import AboutMe from './AboutMe/AboutMe';
import Users from './Users/Users';

const Home = () => {
  return (
    <section>
      <MainBanner />
      <AboutMe />
      <Users />
    </section>
  )
}

export default Home;