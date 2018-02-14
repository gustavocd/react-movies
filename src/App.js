import './App.css';
import React, { Component } from 'react';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import SearchBar from './components/SearchBar/SearchBar';
import Catalog from './components/Catalog/Catalog';

import { Route } from 'react-router-dom'
import MoviesList from './components/Movies/MoviesList';
import SeriesList from './components/Series/SeriesList';
import PeopleList from './components/People/PeopleList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="Main">
          <SearchBar />
          <Route exact path="/movies" component={MoviesList}></Route>
          <Route exact path="/series" component={SeriesList}></Route>
          <Route exact path="/people" component={PeopleList}></Route>
          <Route exact path="/" component={Catalog}></Route>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
