import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HomePage from '../../routes/HomePage/HomePage';
import DevicePage from '../../routes/DevicePage/DevicePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/devices" component={DevicePage} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
