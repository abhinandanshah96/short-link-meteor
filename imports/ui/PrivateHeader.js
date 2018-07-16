import React from 'react';
import PropTypes from 'prop-types';


const PrivateHeader = (props) => {
	const renderSub = () => {
		if(props.subtitle)
			return <h4 className="title-bar__subtitle">{props.subtitle}</h4>;
	}
	return (
		<div className="title-bar">
			<div className="wrapper">
				<h1>{props.title}</h1>
				{renderSub()}
			</div>
		</div>
	)
} 

PrivateHeader.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
}

export default PrivateHeader;