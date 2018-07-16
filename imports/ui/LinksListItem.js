import React from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';
import { Meteor } from 'meteor/meteor';

export default class LinksListItem extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			justCopied: false,
		};
	}

	componentDidMount(){
		this.clipboard = new Clipboard(this.refs.copy);
		this.clipboard.on('success', (e) => {
			this.setState({ justCopied: true })
			setTimeout(() => this.setState({ justCopied: false }), 1000);
			// const id = e.trigger.getAttribute('id');
			// document.getElementById(id).innerHTML = "Copied";
			// setTimeout(() => {document.getElementById(id).innerHTML = "Copy"}, 1000);
		}).on('error', () => {
			alert('Unable to copy please do it manually!');
		});
	}

	componentWillUnmount() {
		this.clipboard.destroy();
	}

	render(){
		return (
			<div>
				<p> {this.props.url} ==> 
					<a href={this.props.shortUrl}> {this.props.shortUrl} </a>
					<i>{ this.props.visible.toString() }</i>
					<button id={this.props._id} ref='copy' data-clipboard-text={this.props.shortUrl}>
					{ this.state.justCopied ? 'Copied' : 'Copy' }
					</button>
					<button onClick={ () => { Meteor.call('links.setVisiblity', this.props._id, !this.props.visible )} }>
						{ this.props.visible ? 'Hide' : 'Show' }
					</button>

				</p>
			</div>
		)
	}
}

LinksListItem.propTypes = {
	url: PropTypes.string.isRequired,
	shortUrl: PropTypes.string.isRequired,
	_id: PropTypes.string.isRequired,
	userId: PropTypes.string.isRequired,
	visible: PropTypes.bool.isRequired,
}
