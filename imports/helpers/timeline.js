import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Posts } from '../api/posts.js'; 
import { Meteor } from 'meteor/meteor';
import '../templates/home/timeline.html';

Template.timeline.helpers({
	posts(){
		return Posts.list(Meteor.userId());
	}
});
