import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = (props) => {
  return (
    <nav className="sidebar">
      <ul className="side-list">
        <li className="side-list__item">
          <NavLink
            to="/recepies"
            className="side-list__link"
            activeClassName="side-list__link--active"
          >
            Recepies
          </NavLink>
        </li>
        <li className="side-list__item">
          <NavLink
            to="/tips"
            className="side-list__link"
            activeClassName="side-list__link--active"
          >
            Kitchen Tips
          </NavLink>
        </li>
        <li className="side-list__item">
          <NavLink
            to="/diet"
            className="side-list__link"
            activeClassName="side-list__link--active"
          >
            Health &amp; Diet
          </NavLink>
        </li>
        <li className="side-list__item">
          <NavLink
            to="/news"
            className="side-list__link"
            activeClassName="side-list__link--active"
          >
            News
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
