import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import '../templates/home/profile/profile_box.html';

Template.profileBox.events({
	"click button": function(e){
		e.preventDefault();
		Session.set("editProfile", true);
	}
});