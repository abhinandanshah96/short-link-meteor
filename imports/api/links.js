import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import Shortid from 'shortid'

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
		new SimpleSchema ({
			url: {
				type: String,
				label: 'Your link',
				regEx: SimpleSchema.RegEx.Url
			}
		}).validate({ url });			

		Links.insert({
			_id: Shortid.generate(),
			url: url,
			userId: this.userId
		});

	}

});
