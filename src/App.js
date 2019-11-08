import React, { Component , Suspense } from 'react';
import Characters from './Component/Characters/Characters';
import Loader from './Loader';
import Header from './Component/Header/Header';
import './App.css';
import { getResult } from './APICall';

import {heroObj} from './temp';
const Overlay = React.lazy(() => import('./Component/Overlay/Overlay'));


class App extends Component {
  state = {
    results: '',
    isLoading: true,
    charFocus: heroObj
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
    })
  }
  //set this.state.results from user search
  setResults=(fromSearchQuery)=>{
    this.setState({
      results: fromSearchQuery,
      isLoading: false
    })
  }
  setCharFocus=()=>{

  }
  render() {
    
    return (
      <div className="App">
        <Header setResults={this.setResults}/>
        {this.state.isLoading?
        <Loader/>:<Characters characters={this.state.results}/>}
        <Suspense fallback={<div>Loading...</div>}>
            { this.state.charFocus?
            <Overlay charDetails = {this.state.charFocus} setCharFocus={this.setCharFocus}/>:null}
        </Suspense>

      </div>
    );
  }
}

export default App;
