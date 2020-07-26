import React from 'react';
import Header from './Header';
import './sass/app.scss';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className='app-content'>
        <Home />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
