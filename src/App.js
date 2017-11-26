import './App.css';
import React, { Component } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import SearchBar from './components/SearchBar/SearchBar';
import Catalog from './components/Catalog/Catalog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="Main">
          <SearchBar />
          <Catalog />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
