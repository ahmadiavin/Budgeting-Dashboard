import React from 'react';
import './_searchbar.scss';

function SearchBar(props) {

    return  (
      <div className="SearchBar">
        <form className="SearchBar_Form">
          <input className="SearchBar__Input"
                 value={ props.value }
                 onChange={ props.onChange } 
                 placeholder='Enter a stock symbol to search...'/>
          <button className="SearchBar__Button" onClick={ props.onClick }>search</button>
        </form>
      </div>
    );
}

export default SearchBar;