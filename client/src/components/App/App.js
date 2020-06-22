import React, { Component } from 'react';
import AppBar from '../AppBar/AppBar';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../../pages/Home/Home.js';
import About from '../../pages/About/About.js';
// import Account from '../../pages/Account';
import GalleryPhoto from '../../pages/Gallery/Gallery';
// import Login from '../../pages/Login';
// import SignUp from '../../pages/SignUp';
import styles from './app.module.css';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <AppBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/gallery" component={GalleryPhoto} />
            {/* <Route path="/account" component={Account} /> */}
            {/* <Route path="/login" component={Login} /> */}
            {/* <Route path="/signup" component={SignUp} /> */}
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
