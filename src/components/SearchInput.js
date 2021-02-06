import React from 'react';
import iconSet from '../svg/selection.json';
import IcomoonReact from 'icomoon-react';

const SearchInput = (props) => {
  return (
    <div className='search'>
      <input
        className="search__input"
        type="text"
        placeholder="Search..."
      />
      <button className='search__button button'>
        <IcomoonReact className="icon" iconSet={iconSet} icon="search" />
      </button>
    </div>
  );
};

export default SearchInput;
