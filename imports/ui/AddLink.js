import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';


export default class AddLink extends React.Component {
	onSubmit(e){
		e.preventDefault();
		const url = this.refs.url.value.trim();
		if(url){
			Meteor.call('links.insert', url);
			this.refs.url.value = '';
		}
		console.log("Submitted", url)	;
	}
	render(){
		return(
			<div>
				<form onSubmit={this.onSubmit.bind(this)}>
					<input type='text' name='url' ref='url' placeholder="url" />
					<button>Submit</button>
				</form>
				<p><button onClick={ () => Accounts.logout() }>Logout</button></p>
			</div>
		)
	}

}