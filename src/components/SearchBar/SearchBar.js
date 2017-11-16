import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    render () {
        return (
            <input className="SearchBar" placeholder="Búscar película, seríe de TV o persona" />
        )
    }
}

export default SearchBar;