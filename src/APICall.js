import { config } from './config';

const md5 = require('md5');
const { privateKey, publicKey, ts } = config;
const hash = md5(ts+privateKey+publicKey)

export const getResult = async () => {
    //if (this.state.isLoading === false) this.controlToggle('isLoading')
    try {
        const response = await fetch(`https://gateway.marvel.com/v1/public/characters?limit=20&ts=${ts}&apikey=${publicKey}&hash=${hash}`); 
        const myJson = await response.json();
        //console.log(myJson.data.results)
        return (myJson.data.results)
    } catch (err) {
        alert('error while fetching data');
    }
}

export const getSearchResult = async (query) => {
    //if (this.state.isLoading === false) this.controlToggle('isLoading')
    try {
        const response = await fetch(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&limit=20&ts=${ts}&apikey=${publicKey}&hash=${hash}`); 
        const myJson = await response.json();
        //console.log(myJson.data.results)
        return (myJson.data.results)
    } catch (err) {
        alert('error while fetching data');
    }
}