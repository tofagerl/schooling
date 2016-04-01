/*eslint no-console: 0 */
import Jokes from './collections/jokes';
let jokes = new Jokes();
let joke = jokes.fetch();
console.log(joke);
