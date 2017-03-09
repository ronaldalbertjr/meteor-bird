import { Router } from 'meteor/iron-router';
import '../imports/helpers/home.js';

Router.map(function(){
	this.route("home",{
		path:'/',
		template: 'home',
		layoutTemplate: 'layout',
	});
});