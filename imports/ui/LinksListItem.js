import React from 'react';
import PropTypes from 'prop-types';

export default class LinksListItem extends React.Component {
	render(){
		return (
			<div>
				<p> {this.props.url} ==> 
					<a href={this.props.shortUrl}> {this.props.shortUrl} </a>
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
}
