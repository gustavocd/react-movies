import React, { Component } from 'react';

class MoviesList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_MOVIES_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(blob => blob.json())
            .then(data => {
                this.setState({ movies: data.results })
            })
    }

    render() {
        return (
            <div>
                <h1>Movies List</h1>
            </div>
        )
    }
}

export default MoviesList;