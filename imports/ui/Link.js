import React from 'react';

import LinksList from './LinksList'
import LinksListFilters from './LinksListFilters'
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';

export default () => {
	return (
		<div>
			<PrivateHeader title='Links Shortner' />
			<div className="wrapper" >
				<div className="wrapper--side">
					<LinksListFilters />
					<AddLink />
				</div>				
				<LinksList />
			</div>
		</div>			
	);
};
