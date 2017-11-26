import './Movies.css';
import React, { Component } from 'react';

class Movies extends Component {
    render() {
        return (
            <section className="Movies">
                <h1>On Theaters</h1>    
                <div className="Movies-Container">
                    <article className="Movies-Container__item">
                        <a href="/">
                            <img className="Movies-Container__image Movies-Container__image--first" src="https://image.tmdb.org/t/p/w250_and_h141_bestv2/o5T8rZxoWSBMYwjsUFUqTt6uMQB.jpg" alt="Movie 1" />
                        </a>
                        <div className="Movies-Container__footer">
                            <h3 className="Movies-Container__title">Item 1</h3>
                            <p className="Movies-Container__description">some random text</p>
                        </div>
                    </article>
                    <article className="Movies-Container__item">
                        <a href="/">
                            <img className="Movies-Container__image Movies-Container__image--second" src="https://image.tmdb.org/t/p/w250_and_h141_bestv2/lhTtnsPmEYUJB7nOaTKJzYoxJ7X.jpg" alt="Movie 2" />
                        </a>
                        <div className="Movies-Container__footer">
                            <h3 className="Movies-Container__title">Item 1</h3>
                            <p className="Movies-Container__description">some random text</p>
                        </div>
                    </article>
                    <article className="Movies-Container__item">
                        <a href="/">
                            <img className="Movies-Container__image Movies-Container__image--third" src="https://image.tmdb.org/t/p/w500_and_h281_bestv2/5wNUJs23rT5rTBacNyf5h83AynM.jpg" alt="Movie 3" />
                        </a>
                        <div className="Movies-Container__footer">
                            <h3 className="Movies-Container__title">Item 1</h3>
                            <p className="Movies-Container__description">some random text</p>
                        </div>
                    </article>
                </div>
            </section>
        )
    }
}

export default Movies;