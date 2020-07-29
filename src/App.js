import React from 'react';
import Header from './Header';
import './sass/app.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <main className='app-content'>
          <Switch>
            <Route path='/' render={() => <Home />} />
          </Switch>
          {/* <Home /> */}
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
