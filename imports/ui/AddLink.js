import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import Modal from 'react-modal';

export default class AddLink extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			url: '',
			isOpen: false,
			error: '',
		}
	}

	onSubmit(e){
		e.preventDefault();
		const url = this.state.url;
		// const url = this.refs.url.value.trim();
		if(url){
			Meteor.call('links.insert', url, (err, res) => {
				if(!err){
					this.handleModalClose()
				}	else {
					this.setState({ error: err.reason })
				}
			})
		}
	}

	onChange(e) {
		this.setState({
			url: e.target.value
		});
	}

	handleModalClose() {
		this.setState({isOpen: false, url: '', error: ''})
	}
	
	render(){
		return(
			<div>
			<button onClick={ () =>  this.setState({isOpen: true})}>Add Link</button>
			<Modal 
				isOpen={this.state.isOpen} 
				contentLabel="Add Link" 
				onAfterOpen={() => this.refs.url.focus()}
				onRequestClose={this.handleModalClose.bind(this)}
			>
				<h1> Add Link </h1>
				{this.state.error ? <p>{this.state.error}</p> : undefined}
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
				<p><button onClick={ this.handleModalClose.bind(this) }>Close Modal</button></p>
			</Modal>
			<p><button onClick={ () => Accounts.logout() }>Logout</button></p>
			</div>
		)
	}

}