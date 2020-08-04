import React from 'react';
import './sass/app.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header';
import Home from './components/Home/Home';
import Footer from './Footer';

function App() {
  return (
    <Router basename="/test-assignment/">
      <div className="app-wrapper">
        <Header />
        <main className='app-content'>
          <Switch>
            <Route path='/' render={() => <Home />} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
