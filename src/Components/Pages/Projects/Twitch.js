/** @format */

import React, { Component } from 'react';
import Textbox from '../../TextBox';
import Accent from '../../Accent';
import {
	Desktop,
	Desktop1440,
	Tablet,
	Mobile,
	Default,
	AnyDesktop,
	NotDesktop,
} from '../../Layout/Responsive';

export class Twitch extends Component {
	textBox = () => {
		return {
			backgroundColor: '#1D3557',
			color: '#F1FAEE',
			width: '90vw',
			height: '85vh',
			border: '5px solid #A8DADC',
			borderRadius: '2%',
			display: 'grid',
			gridTemplateRows: '1vw 1fr 1vw',
			gridTemplateColumns: '1vw 1fr 1vw',
			gridTemplateAreas:
				"'topLeft . topRight' 'left content right' 'botLeft . botRight'",
		};
	};

	content = (c) => {
		return (
			<>
				<Accent corner='topLeft' len='1vw' margin='1vw' />
				<Accent corner='topRight' len='1vw' margin='1vw' />
				{c}
				<Accent corner='bottomLeft' len='1vw' margin='1vw' />
				<Accent corner='bottomRight' len='1vw' margin='1vw' />
			</>
		);
	};

	twitch = (
		<>
			
		</>
	);

	render() {
		return (
			<>
				<Textbox textbox={this.textBox()} content={this.content(this.twitch)} />
			</>
		);
	}
}

export default Twitch;
