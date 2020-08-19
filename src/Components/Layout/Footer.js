/** @format */

import React, { Component } from 'react';
import { Desktop, Tablet, Mobile, Default } from './Responsive';

export class Footer extends Component {
	footer = () => {
		return {
			display: 'inline-grid',
			fontSize: '1rem',
			marginBottom: '2vh',
			position: 'fixed',
			bottom: '0',
			width: '90vw',
			gridTemplateColumns: '1fr 2fr 1fr',
		};
	};

	biggerFooter = () => {
		return {
			gridTemplateColumns: '1fr 1fr 1fr',
			fontSize: '1.4rem',
		};
	};

	line = () => {
		return {
			borderTop: '2px solid #a8dadc',
			height: '0',
			marginTop: '0.7em',
		};
	};

	name = () => {
		return {
			textAlign: 'center',
			color: '#f1faee',
			fontSize: '1em',
			padding: '0 0.2em',
		};
	};

	render() {
		return (
			<>
				<Mobile>
					<div className='footer' style={this.footer()}>
						<hr className='line' style={this.line()}></hr>
						<span style={this.name()}>TOMMY MCDERMOTT</span>
						<hr className='line' style={this.line()}></hr>
					</div>
				</Mobile>
				<Default>
					<div
						className='footer'
						style={{ ...this.footer(), ...this.biggerFooter() }}>
						<hr className='line' style={this.line()}></hr>
						<span style={this.name()}>TOMMY MCDERMOTT</span>
						<hr className='line' style={this.line()}></hr>
					</div>
				</Default>
			</>
		);
	}
}

export default Footer;
