import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Accounts } from 'meteor/accounts-base';

import { Links } from '../api/links'
import LinksList from './LinksList'

export default class Link extends React.Component{
	onSubmit(e){
		e.preventDefault();
		const url = this.refs.url.value.trim();
		if(url){
			Meteor.call('links.insert', url);
			this.refs.url.value = '';
		}
		console.log("Submitted", url)	;
	}

	onLogout(){
		Accounts.logout();
	}
	
	render(){
		return(
				<div>
					<h1>Links</h1>
					<LinksList />
					<form onSubmit={this.onSubmit.bind(this)}>
						<input type='text' name='url' ref='url' placeholder="url" />
						<button>Submit</button>
					</form>
					<p><button onClick={this.onLogout.bind(this)}>Logout</button></p>
				</div>
			)
	};
};

