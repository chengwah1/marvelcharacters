import React, { Component } from 'react';
import Characters from './Component/Characters/Characters';
import Loader from './Loader';
import Header from './Component/Header/Header';
import './App.css';
import { getResult } from './APICall';



class App extends Component {
  state = {
    results: '',
    isLoading: true,
  };
  //onload fetch data
  componentDidMount() {
    getResult()
    .then(
      (promise)=>{
      this.setState({
        results: promise,
        isLoading: false
      })
      console.log(this.state.results)
    })
  }
  //set this.state.results from user search
  setResults=(fromSearchQuery)=>{
    this.setState({
      results: fromSearchQuery,
      isLoading: false
    })
  }
  render() {
    
    return (
      <div className="App">
        <Header setResults={this.setResults}/>
        {this.state.isLoading?
        <Loader/>:<Characters characters={this.state.results}/>}
        {/* Footer */}
      </div>
    );
  }
}

export default App;
