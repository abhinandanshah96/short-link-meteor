import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

import '../imports/api/users';
import {Links} from '../imports/api/links';
import '../imports/startup/simpl-schema-configuration.js'

Meteor.startup(() => {
		WebApp.connectHandlers.use('/', (req, res, next) => {
		// console.log(req.url, req.method, req.headers, req.query);
		const _id = req.url.slice(1);
		const link = Links.findOne({ _id });

		if( link ){
			// Set Status Code
			res.statusCode = 302;
			// Set HTTP Headers
			res.setHeader('Location', link.url);
			// Set HTTP Body
			// res.write('<h1>Hello</h1>');
			// End response
			Meteor.call('links.track', _id);
			res.end();
		}
		next();
	});
});