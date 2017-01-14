import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import '../templates/home/post.html';

Template.post.events({
	'submit form': function(event, template) {
		event.preventDefault();
		var textarea = template.find("textarea");
		var posts = Session.get("posts") || [];
		posts.push({message: textarea.value});
		Session.set("posts", posts);
		textarea.value = "";	
	}
});