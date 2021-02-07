import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = (props) => {
  return (
    <nav className="sidebar">
      <ul className="side-list">
        <li className="side-list__item">
          <NavLink
            to="/breakfast"
            className="side-list__link"
            activeClassName="side-list__link--active"
          >
            Breakfast
          </NavLink>
        </li>
        <li className="side-list__item">
          <NavLink
            to="/lunch"
            className="side-list__link"
            activeClassName="side-list__link--active"
          >
            Lunch
          </NavLink>
        </li>
        <li className="side-list__item">
          <NavLink
            to="/dinner"
            className="side-list__link"
            activeClassName="side-list__link--active"
          >
            Dinner
          </NavLink>
        </li>
        <li className="side-list__item">
          <NavLink
            to="/snacks"
            className="side-list__link"
            activeClassName="side-list__link--active"
          >
            Snacks
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
