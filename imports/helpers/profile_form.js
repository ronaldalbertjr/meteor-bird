import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor';
import '../templates/home/profile/profile_form.html';

Template.profileForm.events({
	"submit form": function(e, template){
		e.preventDefault();
		var inputs = template.findAll("input");
		Meteor.users.update({_id: this.userId }, {$set: {"profile.name": inputs[0].value, "profile.about": inputs[1].value} });
		Session.set("editProfile", false);
	}
});