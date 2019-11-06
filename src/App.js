import React, { Component } from 'react';
import './App.css';
import { getResult } from './APICall';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: '',
      isLoading: true,
    };
  }
  componentDidMount() {
    getResult()
    .then(
      (promise)=>{
      this.setState({
        results: promise,
        isLoading: false
      })
    })
  }
  render() {
    return (
      <div className="container">
          <p>
            Test
          </p>
      </div>
    );
  }
}

export default App;
