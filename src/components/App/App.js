import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Home from '../../routes/Home/Home';
import Devices from '../../routes/Devices/Devices';
import News from '../../routes/News/News';
import './App.css';

function App() {
  return (
    <Router>
      <div id="App">
        <Navigation />
        <Header />
        <div id="main-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/devices" component={Devices} />
            <Route path="/news" component={News} />
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
