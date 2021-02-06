import React from 'react';
import SearchInput from './SearchInput'
import iconSet from '../svg/selection.json';
import IcomoonReact from 'icomoon-react';

const Header = (props) => {
  return (
    <header id="main-header">
      <IcomoonReact id="logo" iconSet={iconSet} icon='leaf' />
      <SearchInput />
      <div>login</div>
    </header>
  );
};

export default Header;
