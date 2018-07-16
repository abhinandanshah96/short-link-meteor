import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';


export default class AddLink extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			url: 'hello',
		}
	}

	onSubmit(e){
		e.preventDefault();
		const url = this.state.url;
		// const url = this.refs.url.value.trim();
		if(url){
			Meteor.call('links.insert', url, (err, res) => {
				if(!err){
					this.setState({ url: ''});
				}		
			})
		}
	}

	onChange(e) {
		this.setState({
			url: e.target.value
		});
	}
	
	render(){
		return(
			<div>
				<form onSubmit={this.onSubmit.bind(this)}>
					<input 
						type='text' 
						name='url' 
						ref='url' 
						placeholder="url" 
						value={this.state.url}
						onChange={this.onChange.bind(this)} />
					<button>Submit</button>
				</form>
				<p><button onClick={ () => Accounts.logout() }>Logout</button></p>
			</div>
		)
	}

}