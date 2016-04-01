import Backbone from 'backbone';
import Joke from '../models/joke'

export class Jokes extends Backbone.Collection{
	model: Joke,
	url: 'http://api.icndb.com/jokes/random/1'
}