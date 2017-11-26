import './Footer.css';
import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="Footer">
                Developed by <a href="https://www.github.com/gustavocd" rel="noopener noreferrer" target="_blank" className="Footer__link">Gustavo Castillo</a>
            </footer>
        )
    }
}

export default Footer;