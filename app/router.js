import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('chefs');
  this.route('about');
  this.route('training');
  this.route('chef', 'chefs/:food_id');
});

export default Router;
