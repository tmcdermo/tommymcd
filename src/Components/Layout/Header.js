/** @format */

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Desktop, Tablet, Mobile, Default } from './Responsive';

export class Header extends Component {
	header = () => {
		return {
			display: 'inline-grid',
			width: '100%',
			fontSize: '1rem',
			gridTemplateColumns: '1fr 2fr 1fr',
		};
	};

	line = () => {
		return {
			borderTop: '2px solid #a8dadc',
			height: '0',
			marginTop: '0.9em',
		};
	};

	navbar = () => {
		return {
			display: 'grid',
			gridTemplateColumns: '1fr 1fr 1fr 1fr',
		};
	};

	navItem = () => {
		return {
			display: 'inline',
			color: '#f1faee',
			listStyleType: 'none',
			textAlign: 'center',
			padding: '0 0.8em',
			fontSize: '1.4em',
		};
	};

	activePage = () => {
		return {
			fontWeight: 'bolder',
			borderBottom: '2px solid #a8dadc',
			paddingBottom: '5px',
		};
	};

	render() {
		var currentLocation = window.location.pathname;

		return (
			<div className='header' style={this.header()}>
				<hr className='line' style={this.line()}></hr>
				<ul style={this.navbar()}>
					<li style={this.navItem()}>
						<a
							style={currentLocation === '/' ? this.activePage() : {}}
							href='/'>
							<Mobile>
								<FontAwesomeIcon icon='home' />
							</Mobile>
							<Default>
								<span>Home</span>
							</Default>
						</a>
					</li>
					<li style={this.navItem()}>
						<a
							style={currentLocation === '/about' ? this.activePage() : {}}
							href='/about'>
							<Mobile>
								<FontAwesomeIcon icon='address-card' />
							</Mobile>
							<Default>
								<span>About</span>
							</Default>
						</a>
					</li>
					<li style={this.navItem()}>
						<a
							style={currentLocation === '/projects' ? this.activePage() : {}}
							href='/projects'>
							<Mobile>
								<FontAwesomeIcon icon='project-diagram' />
							</Mobile>
							<Default>
								<span>Projects</span>
							</Default>
						</a>
					</li>
					<li style={this.navItem()}>
						<a
							style={currentLocation === '/contact' ? this.activePage() : {}}
							href='/contact'>
							<Mobile>
								<FontAwesomeIcon icon='comments' />
							</Mobile>
							<Default>
								<span>Contact</span>
							</Default>
						</a>
					</li>
				</ul>
				<hr className='line rightLine' style={this.line()}></hr>
			</div>
		);
	}
}

export default Header;
