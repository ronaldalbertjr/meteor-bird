import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import '../templates/home/timeline.html';

Template.timeline.helpers({
	posts(){
		return Session.get("posts");
	}
});
