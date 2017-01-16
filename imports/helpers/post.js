import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Posts } from '../api/posts.js'; 
import '../templates/home/post.html';

Template.post.events({
	'submit form': function(event, template) {
		event.preventDefault();
		var textarea = template.find("textarea");
		Posts.publish(textarea.value);
		textarea.value = "";	
	}
});