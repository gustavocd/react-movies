import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render () {
        return (
            <header className="Header">
                <ul className="Menu">
                    <li className="Menu__item">
                        <a className="Menu__link" href="/">Home</a>
                    </li>
                    <li className="Menu__item">
                        <a className="Menu__link" href="/movies">Movies</a>
                    </li>
                    <li className="Menu__item">
                        <a className="Menu__link" href="/series">TV Shows</a>
                    </li>
                    <li className="Menu__item">
                        <a className="Menu__link" href="/people">People</a>
                    </li>
                </ul>
            </header>
        )
    }
}

export default Header;