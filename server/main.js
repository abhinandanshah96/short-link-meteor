import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

import '../imports/api/users';
import '../imports/api/links';
import '../imports/startup/simpl-schema-configuration.js'

Meteor.startup(() => {
		WebApp.connectHandlers.use('/', (req, res, next) => {
		console.log(req.url, req.method, req.headers, req.query);
		next();
	});
});