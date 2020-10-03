import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match}) => {
	return (  
		<div 
			onClick={() => history.push(`${match.url}${linkUrl}`)}
			className={size ? `${size} menu-item` : "menu-item"}>
			<div 
				className="background-image" 
				style={{
					backgroundImage: `url(${imageUrl})` 
				}}
			/>
			<div className="content">
				<h1 className="title">{title}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
}
 
export default withRouter(MenuItem);

/**
 * NOTE dynamic class - {`${size} menu-item`}
 */