import { setLang } from '../../../global/variables';

let page: number = 1;
let lang: string = 'en-US';

const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: process.env.API_KEY!
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));
//

export {};