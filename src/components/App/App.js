import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HomePage from '../../routes/HomePage/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
