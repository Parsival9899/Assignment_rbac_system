import React, { memo } from 'react';
import { TopNav } from './common';

const navOptions = [
	{title: 'Login', path: '/login'},
	{title: 'Register', path: '/register'}
];

function LandingPage() {
	return (
		<div className="bgimg w3-display-container w3-animate-opacity w3-text-white">
			<TopNav routes={navOptions}/>
			<div className="w3-display-middle">
				<h1 className="w3-jumbo w4-animate-top">Welcome to RBAC Sys</h1>
				<hr className="w3-border-grey" style={{margin: 'auto', width: '40%'}} />
			</div>
		</div>
	)
}

export default memo(LandingPage);
