import React, { Component, Suspense } from 'react';
import Characters from './Component/Characters/Characters';
import Loader from './Loader';
import Header from './Component/Header/Header';
import './App.css';
import { getResult } from './APICall';
import {LikeListProvider} from './LikeListContext';

const Overlay = React.lazy(() => import('./Component/Overlay/Overlay'));

class App extends Component {
  state = {
    results: '',
    isLoading: true,
    charFocus: {},
    isOpen: true,
    likeList: []
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
    this.state.isOpen? this.setState({isOpen:false}): this.setState({isOpen:true})
  }
  setLikeList=(id, index)=>{
    //this = App
    if (index === -1){//push
      this.setState((prev)=>{
        return {likeList:[...prev.likeList, id ]}
      })
    }
    else{//remove item from array
      const list = this.state.likeList
      this.setState((prev)=>{
        return{
          likeList: [...list.slice(0,index),...list.slice(index+1)]
        }
      })
      
    }
  }
  
  render() {
  const contextValue = {
      likeList: this.state.likeList,
      setLikeList: this.setLikeList
    }
    return (
      <div className="App">
        <LikeListProvider value ={contextValue}>
          <Header setResults={this.setResults}/>
          {this.state.isLoading?
          <Loader/>:<Characters characters={this.state.results} setCharFocus={this.setCharFocus} />}
          <Suspense fallback={<div>Loading...</div>}>
              { this.state.charFocus?
              <Overlay charDetails = {this.state.charFocus} setCharFocus={this.setCharFocus}
              overLayStatus={this.state.isOpen} toggleOverLay = {this.toggleOverlay}/>:null}
          </Suspense>
        </LikeListProvider>
      </div>
    );
  }
}

export default App;
