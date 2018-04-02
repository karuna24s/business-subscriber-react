import React, { Component } from 'react';
import BusinessList from './components/BusinessList'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BusinessList />
      </div>
    );
  }
}

export default App;
