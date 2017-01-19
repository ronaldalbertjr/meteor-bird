import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import '../templates/home/profile/profile.html';
import './profile_box.js';
import './profile_form.js';

Template.profile.helpers({
	editProfile(){
		return Session.get("editProfile");
	}
});