import {config} from './config';

const md5 = require('md5');
const privateKey = config.privateKey;
const ts = config.ts;
const hash = md5(ts+privateKey+config.publicKey)

export const getResult = async (query) => {
    //if (this.state.isLoading === false) this.controlToggle('isLoading')
    try {
        const response = await fetch(`https://gateway.marvel.com/v1/public/characters?limit=20&ts=${ts}&apikey=${config.publicKey}&hash=${hash}`); 
        const myJson = await response.json();
        //console.log(myJson.data.results)
        return (myJson.data.results)
    } catch (err) {
        alert('error while fetching data');
    }
  }