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
    charFocus: heroObj,
    isOpen: true
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
  //on character card click set character focus state
  setCharFocus=(character)=>{
    this.setState({
      charFocus: character,
      isOpen: true
    })
  }
  //toggle overlay
  toggleOverlay=()=>{
    console.log(this.state.isOpen)
    this.state.isOpen? this.setState({isOpen:false}): this.setState({isOpen:true})
  }
  render() {
    
    return (
      <div className="App">
        <Header setResults={this.setResults}/>
        {this.state.isLoading?
        <Loader/>:<Characters characters={this.state.results} setCharFocus={this.setCharFocus} />}
        <Suspense fallback={<div>Loading...</div>}>
            { this.state.charFocus?
            <Overlay charDetails = {this.state.charFocus} setCharFocus={this.setCharFocus}
            overLayStatus={this.state.isOpen} toggleOverLay = {this.toggleOverlay}/>:null}
        </Suspense>

      </div>
    );
  }
}

export default App;
