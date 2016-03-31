'use strict';
var fetch = require('node-fetch');
var en = require('html-entities').AllHtmlEntities;

const AMOUNT_OF_JOKES = 10;
const URL = 'http://api.icndb.com/jokes/random/';

let getJokes = (amount) => {
  fetch(URL + amount)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      return json.value;
    })
    .then((jokes) => {
      let output = 'Some jokes for you:\n\n';
      for (let joke of jokes) {
        output = output + joke.joke + '\n';
      }
      output = en.decode(output);
      console.log(output);
    })
    .catch((err) => {
      console.log(err);
    });
};


getJokes(AMOUNT_OF_JOKES);
