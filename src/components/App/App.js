import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../../routes/Home/Home';
import Devices from '../../routes/Devices/Devices';
import News from '../../routes/News/News';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/devices" component={Devices} />
          <Route path="/news" component={News} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
