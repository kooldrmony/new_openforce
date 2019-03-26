/*This component is the small button component the will
return a quote of four words or less if clicked */

import React from 'react';
import axios from 'axios';
// import Quotes from '../Quotes';


class SmallButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false
		}

		this.handleClicked = this.handleClicked.bind(this)
	}


	handleClicked = () => {
		this.setState({
			clicked: true
		})

		axios.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
					.then(function (response) {
						//currently logging the response in the console.
						// console.log(response.data[0]);
						const wordsInQuote = response.data[0].split(" ")
						console.log(wordsInQuote);
						if (wordsInQuote < 4) {
								console.log("Small Quote");
							} else if (wordsInQuote > 5 && wordsInQuote < 12) {
								console.log("Medium quote");
							} else {
								console.log("Large quote");
							};

						// if(wordsInQuote <= 4) {
						// 	console.log("The quotes is less than 4 words")
	 				})
					.catch(function (error) {
						console.log(error);
					})

	}



	render() {
		return (
			<div>
				<button id="smallButton" onClick={this.handleClicked}>
				Small Quote
				</button>
				<p>{this.state.clicked}</p>
			</div>
		)
	}
}

export default SmallButton;