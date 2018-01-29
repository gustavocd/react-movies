import './Header.css';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'

class Header extends Component {
    render () {
        const { location } = this.props
        return (
            <header className="Header">
                <ul className="Menu">
                    <li className="Menu__item">
                        <Link to="/" className={`Menu__link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                    </li>
                    <li className="Menu__item">
                        <Link to="/movies" className={`Menu__link ${location.pathname === '/movies' ? 'active' : ''}`}>Movies</Link>
                    </li>
                    <li className="Menu__item">
                        <Link to="/series" className={`Menu__link ${location.pathname === '/series' ? 'active' : ''}`}>Shows</Link>
                    </li>
                    <li className="Menu__item">
                        <Link to="/people" className={`Menu__link ${location.pathname === '/people' ? 'active' : ''}`}>People</Link>
                    </li>
                </ul>
            </header>
        )
    }
}

export default withRouter(Header);