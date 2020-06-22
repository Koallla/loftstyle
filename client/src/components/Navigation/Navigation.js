import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css';
import { Elastic } from 'react-burgers';

const color = '#948037';
const decor = 'underline';

export default class Navigation extends Component {
  state = {
    isOpen: false,
    isRenderBurger: true,
  };

  handleToggle = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  };

  render() {
    const { isOpen, isRenderBurger } = this.state;
    return (
      <div className={styles.container}>
        <a href="/">
          <div className={styles.logo}>Loft-design</div>
        </a>

        <div className={styles.container_navPage}>
          {isOpen && (
            <div className={styles.navPage}>
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
                to="/about"
              >
                About us
              </NavLink>
              {/* <NavLink
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
            </NavLink> */}
            </div>
          )}

          {isRenderBurger && (
            <Elastic
              className={styles.Burger}
              active={isOpen}
              onClick={this.handleToggle}
              color={'#ddd'}
            />
          )}
        </div>
      </div>
    );
  }
}

// export default Navigation;
