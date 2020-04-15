import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css';
import { Elastic } from 'react-burgers';

const color = 'black';
const decor = 'underline';

export default class Navigation extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;
    return (
      <>
        <a href="/">
          <div className={styles.logo}></div>
        </a>

        {isOpen && (
          <>
            <NavLink
              exact
              activeStyle={{
                fontWeight: 'bold',
                color: `${color}`,
                textDecoration: `${decor}`,
              }}
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              activeStyle={{
                fontWeight: 'bold',
                color: `${color}`,
                textDecoration: `${decor}`,
              }}
              to="/about"
            >
              About us
            </NavLink>

            <NavLink
              activeStyle={{
                fontWeight: 'bold',
                color: `${color}`,
                textDecoration: `${decor}`,
              }}
              to="/gallery"
            >
              Gallery
            </NavLink>
            <NavLink
              activeStyle={{
                fontWeight: 'bold',
                color: `${color}`,
                textDecoration: `${decor}`,
              }}
              to="/account"
            >
              Account
            </NavLink>

            <NavLink
              exact
              activeStyle={{
                fontWeight: 'bold',
                color: `${color}`,
                textDecoration: `${decor}`,
              }}
              to="/login"
            >
              Login
            </NavLink>

            <NavLink
              activeStyle={{
                fontWeight: 'bold',
                color: `${color}`,
                textDecoration: `${decor}`,
              }}
              to="/signup"
            >
              SignUp
            </NavLink>
          </>
        )}

        <Elastic
          className={styles.Burger}
          active={isOpen}
          onClick={this.handleToggle}
        />
      </>
    );
  }
}

// export default Navigation;
