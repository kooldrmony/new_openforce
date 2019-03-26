/*This component is responsible for asking and giving the user an option to 
choose the size of quote they want*/

import React, { Component } from 'react';
import "./QuoteOption.css";
import SmallButton from "../SmallButton";
import MediumButton from "../MediumButton";
import LargeButton from "../LargeButton";

class QuoteOption extends Component {

	render() {
		return (
			<div>
				<h3>
    				Choose between small, medium, or large Swanson words of Wisdom!
    			</h3>
    			<div id="container">
    				<SmallButton />
    				<MediumButton />
    				<LargeButton />
      			</div>
			</div>

		)
	}
}

export default QuoteOption;
