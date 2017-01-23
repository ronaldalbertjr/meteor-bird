import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor';
import '../templates/home/profile/profile_form.html';

Template.profileForm.events({
	"submit form": function(e, template){
		e.preventDefault();
		var inputs = template.findAll("input");
		prof = {name: inputs[0].value, about: inputs[1].value};
		Meteor.users.update({_id: Meteor.userId()}, {$set: {profile: prof}});
		Session.set("editProfile", false);
	}
});