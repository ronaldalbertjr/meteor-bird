import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser(function(options, user){
	user['profile'] = options.profile;
	return user;
});