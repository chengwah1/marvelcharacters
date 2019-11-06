import React, { Component } from 'react';
import Characters from './Component/Characters/Characters';
import Loader from './Loader';
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
      console.log(this.state.results)
    })
  }
  render() {
    return (
      <div className="">
        {/* HEADER */}
        {this.state.isLoading?
        <Loader/>:<Characters characters={this.state.results}/>}
        {/* Footer */}
      </div>
    );
  }
}

export default App;
