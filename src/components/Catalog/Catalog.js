import './Catalog.css';
import React, { Component } from 'react';
import Series from './Series/Series';
import Movies from './Movies/Movies';

class Catalog extends Component {
    render() {
        return (
            <section className="Catalog">
                <Series />
                <Movies />
            </section>
        )
    }
}

export default Catalog; 