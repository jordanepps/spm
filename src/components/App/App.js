import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import PrivateRoute from '../Utils/PrivateRoute';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
// import Footer from '../Footer/Footer';
import Home from '../../routes/Home/Home';
import Devices from '../../routes/Devices/Devices';
import News from '../../routes/News/News';
import './App.css';
import Login from '../../routes/Login/Login';
import Inventory from '../../routes/Inventory/Inventory';
import Registration from '../../routes/Registration/Registration';
import Settings from '../../routes/Settings/Settings';
import Allowed from '../../routes/Allowed/Allowed';

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
            <PublicOnlyRoute path="/inventory-login" component={Login} />
            <PublicOnlyRoute
              path="/inventory-registration"
              component={Registration}
            />
            <PrivateRoute
              exact
              path="/inventory-manager"
              component={Inventory}
            />
            <PrivateRoute
              exact
              path="/inventory-manager/settings"
              component={Settings}
            />
            <PrivateRoute
              exact
              path="/inventory-manager/settings/allowed"
              component={Allowed}
            />
            <Redirect to="/" />
          </Switch>
        </div>

        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
