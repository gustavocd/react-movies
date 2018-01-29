import './Movies.css';
import React, { Component } from 'react';

class Movies extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }

    componentDidMount = () => {
        fetch(`${process.env.REACT_APP_MOVIES_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(blob => blob.json())
            .then(data => {
                this.setState({movies: data.results.splice(0, 3)})
            })
    }

    render() {
        const { movies } = this.state
        let moviesTpl = null
        if (movies) {
            moviesTpl = <div className="Movies-Container">
                {movies.map(movie => (
                    <article key={movie.id} className="Movies-Container__item">
                        <a href="/">
                            <img className="Movies-Container__image"
                                src={`https://image.tmdb.org/t/p/w250_and_h141_bestv2/${movie.backdrop_path}`}
                                alt={movie.title} />
                        </a>
                        <div className="Movies-Container__footer">
                            <h3 className="Movies-Container__title">{movie.original_title}</h3>
                            <p className="Movies-Container__description">{movie.title}</p>
                        </div>
                    </article>
                ))}
            </div>
        } else {
            moviesTpl = <p>No movies</p>
        }
        return (
            <section className="Movies">
                <h1>On Theaters</h1>    
                {moviesTpl}
            </section>
        )
    }
}

export default Movies;