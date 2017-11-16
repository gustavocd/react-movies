import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render () {
        return (
            <header className="Header">
                <ul className="Menu">
                    <li className="Menu__item">
                        <a className="Menu__link" href="/movies">Películas</a>
                    </li>
                    <li className="Menu__item">
                        <a className="Menu__link" href="/series">Seríes de TV</a>
                    </li>
                    <li className="Menu__item">
                        <a className="Menu__link" href="/people">Famosos</a>
                    </li>
                </ul>
            </header>
        )
    }
}

export default Header;