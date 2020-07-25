import React from 'react';
import Header from './Header';
import './sass/app.scss';
import HomeContainer from './components/Home/HomeContainer';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className='app-content'>
       <HomeContainer />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
