//This component is the button that asks the user to click on the button to get a quote

import React, { Component } from "react";
import "./Button.css";
import QuoteOption from '../QuoteOption';

class Button extends Component {
	constructor(props) {
		super(props)
		this.state = {
			show : false
		}

		this.toggleDiv = this.toggleDiv.bind(this)
	}

	toggleDiv = () => {
		this.setState({ show : true })
	}

	render() {
		return (
			<div className="Button">
				<button id="small" onClick={this.toggleDiv}>
					Click for Swanson's Words of Wisdom
				</button>
				<br />
				<br />
				{this.state.show && <QuoteOption />}
			</div>
		)
	}
} 

export default Button;
