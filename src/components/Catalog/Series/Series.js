import './Series.css';
import React, { Component } from 'react';

class Series extends Component {

    constructor(props) {
        super(props)
        this.state = {
            series: []
        }
    }

    componentDidMount = () => {
        fetch(`${process.env.REACT_APP_MOVIES_URL}/discover/tv?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(blob => blob.json())
            .then(data => {
                this.setState({ series: data.results.splice(0, 3) })
            })
    }

    render() {
        const { series } = this.state
        let seriesTpl = null
        if (series) {
            seriesTpl = <div className="Series-Container">
                {series.map(serie => <article key={serie.id} className="Series-Container__item">
                    <a href="/">
                        <img className="Series-Container__image"
                            src={`https://image.tmdb.org/t/p/w250_and_h141_bestv2/${serie.backdrop_path}`}
                            alt={serie.name}/>
                    </a>
                    <div className="Series-Container__footer">
                        <h3 className="Series-Container__title">{serie.original_name}</h3>
                        <p className="Series-Container__description">{serie.name}</p>
                    </div>
                </article>)}
            </div>
        } else {
            seriesTpl = <p>No TV shows</p>
        }
        
        return (
            <section className="Series">
                <h1>On TV</h1>
                {seriesTpl}
            </section>
        )
    }
}

export default Series; 