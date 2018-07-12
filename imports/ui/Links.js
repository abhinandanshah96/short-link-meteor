import React from 'react';
import { Accounts } from 'meteor/accounts-base';


export default class Links extends React.Component{
	Logout(){
		Accounts.logout();
	};
	render(){
		return(
				<div>
					<h1>Links</h1>
				<button onClick={this.Logout}> Logout </button>
				</div>
			)
	};
};

