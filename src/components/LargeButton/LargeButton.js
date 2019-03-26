/*This component is the large button giving the user a Swanson quote 
that is 13 words or larger if clicked */

import React from 'react';

class LargeButton extends React.Component {
	render() {
		return (
			<div>
				<button id="largeButton">
				Large Quote
				</button>
			</div>
		)
	}
}

export default LargeButton;