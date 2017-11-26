import './Series.css';
import React, { Component } from 'react';

class Series extends Component {
    render() {
        return (
            <section className="Series">
                <h1>On TV</h1>
                <div className="Series-Container">
                    <article className="Series-Container__item">
                        <a href="/">
                            <img className="Series-Container__image Series-Container__image--first" src="https://image.tmdb.org/t/p/w500_and_h281_bestv2/xVzvD5BPAU4HpleFSo8QOdHkndo.jpg" alt="Serie 1"/>
                        </a>
                        <div className="Series-Container__footer">
                            <h3 className="Series-Container__title">Item 1</h3>
                            <p className="Series-Container__description">some random text</p>
                        </div>
                    </article>
                    <article className="Series-Container__item">
                        <a href="/">
                            <img className="Series-Container__image Series-Container__image--third" src="https://image.tmdb.org/t/p/w250_and_h141_bestv2/nGsNruW3W27V6r4gkyc3iiEGsKR.jpg" alt="Serie 2"/>
                        </a>
                        <div className="Series-Container__footer">
                            <h3 className="Series-Container__title">Item 2</h3>
                            <p className="Series-Container__description">some random text</p>
                        </div>
                    </article>
                    <article className="Series-Container__item">
                        <a href="/">
                            <img className="Series-Container__image Series-Container__image--second" src="https://image.tmdb.org/t/p/w250_and_h141_bestv2/mmxxEpTqVdwBlu5Pii7tbedBkPC.jpg" alt="Serie 3"/>
                        </a>
                        <div className="Series-Container__footer">
                            <h3 className="Series-Container__title">Item 3</h3>
                            <p className="Series-Container__description">some random text</p>
                        </div>
                    </article>
                </div>
            </section>
        )
    }
}

export default Series; 