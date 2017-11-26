import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    render () {
        return (
            <input className="SearchBar" placeholder="Search for a movie, serie or TV show" />
        )
    }
}

export default SearchBar;