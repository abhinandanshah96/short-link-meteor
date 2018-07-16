import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Links = new Mongo.Collection('links');

if(Meteor.isServer) {
	Meteor.publish('linksPub', function () {
		console.log('Publish', this.userId)
		return Links.find({ userId: this.userId });
	});
}
// resource.action
// emails.archive <== naming convention

Meteor.methods({
	'links.insert'(url){
		if(!this.userId) {
			throw new Meteor.Error('unauthorized');
		}

		Links.insert({
			url: url,
			userId: this.userId
		});

	}

});
