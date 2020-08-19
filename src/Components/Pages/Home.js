/** @format */

import React, { Component } from 'react';
import IntroBox from '../IntroBox';

export class Home extends Component {
	homeStyle = () => {
		return {
			display: 'flex',
			justifyContent: 'center',
		};
	};
	render() {
		return (
			<div style={this.homeStyle()}>
				<IntroBox />
			</div>
		);
	}
}

export default Home;
