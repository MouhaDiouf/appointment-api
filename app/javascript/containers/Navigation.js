import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import './Navigation.css';
export class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: 'breadcrumb',
    };
  }

  toggleIcon() {
    this.state.menu === 'breadcrumb'
      ? this.setState({
          menu: 'close',
        })
      : this.setState({
          menu: 'breadcrumb',
        });
  }
  toggleMenu() {
    const menu = document.querySelector('.menu-list');
    if (!menu.classList.contains('appear')) {
      document.querySelector('.Navigation').classList.add('full-width');
      menu.classList.remove('disappear');
      menu.classList.add('appear');
    } else {
      menu.classList.remove('appear');
      menu.classList.add('disappear');
      document.querySelector('.Navigation').classList.remove('full-width');
    }
  }

  render() {
    return (
      <>
        <nav className="Navigation">
          <div className="menu-icon">
            {this.state.menu === 'breadcrumb' ? (
              <AiOutlineMenu
                className="breadcrumb"
                onClick={() => {
                  this.toggleMenu();
                  this.toggleIcon();
                }}
              />
            ) : (
              <AiOutlineClose
                className="close"
                onClick={() => {
                  this.toggleMenu();
                  this.toggleIcon();
                }}
              />
            )}
          </div>
          <ul className="menu-list disappear">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Contact</li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navigation;
