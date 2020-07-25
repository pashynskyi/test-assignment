import React from 'react';
import Header from './Header';

import './sass/app.scss';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className='app-content'>
        <h1>main block</h1>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
