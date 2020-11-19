/** @format */

import React, { Component } from 'react';
import Textbox from '../TextBox';
import Accent from '../Accent';
import {
	Desktop,
	Desktop1440,
	Tablet,
	Mobile,
	Default,
	AnyDesktop,
	NotDesktop,
} from '../Layout/Responsive';

export class Projects extends Component {
	state = { projectTitle: '' };

	textBox = () => {
		return {
			backgroundColor: '#1D3557',
			color: '#F1FAEE',
			width: '90vw',
			maxWidth: '1000px',
			height: '45vh',
			border: '5px solid #A8DADC',
			borderRadius: '2%',
			display: 'grid',
			gridTemplateRows: '5vw 1fr 5vw',
			gridTemplateColumns: '5vw 1fr 5vw',
			gridTemplateAreas:
				"'topLeft content topRight' 'left content right' 'botLeft content botRight'",
		};
	};

	pillBox = () => {
		return {
			backgroundColor: '#457b9d',
			color: '#F1FAEE',
			border: '5px solid #A8DADC',
			borderRadius: '20px',
			padding: '0 3vw',
			margin: '1%',
			display: 'grid',
			placeItems: 'center',
		};
	};

	selectBox = () => {
		return {
			backgroundColor: '#1D3557',
			color: '#F1FAEE',
			border: '5px solid #A8DADC',
			borderRadius: '50%',
			width: '25vw',
			maxWidth: '180px',
			height: '25vw',
			maxHeight: '180px',
			margin: '1%',
			display: 'grid',
			placeItems: 'center',
		};
	};

	selectContent = (c) => {
		var link = '';

		switch (c) {
			case 'dungeons':
				link = './img/dark-knight-large.png';
				break;
			case 'weather':
				link = './img/sunclouds.png';
				break;
			case 'sports':
				link = './img/sports.png';
				break;
			case 'calculator':
				link = './img/calculator.png';
				break;
			case 'twitch':
				link = './img/Glitch_Purple_RGB.png';
				break;
			default:
				break;
		}
		return (
			<>
				<Mobile>
					<img
						style={{
							width: '12vw',
							maxHeight: '50px',
							maxWidth: '70px',
						}}
						src={link}
						alt={c}
					/>
				</Mobile>
				<Default>
					<img
						style={{
							width: '12vw',
							maxHeight: '70px',
							maxWidth: '70px',
						}}
						src={link}
						alt={c}
					/>
				</Default>
			</>
		);
	};

	mainContent = (title) => {
		var content = '';
		var block = '';
		var tech = [];
		var link = '';

		switch (title) {
			case 'Dungeons of Capstonia':
				block = 'A dungeon-crawler game made for my college Capstone project.';
				tech = ['C#', 'MONOGAME', 'FILE I/O'];
				link = 'https://capstonia.tommymcd.com';
				break;
			case 'Weather App':
				block =
					"Who hasn't made a weather app?  Real simple example of API usage.";
				tech = ['HTML', 'CSS', 'JS', 'DOM', 'OPENWEATHER API'];
				link = 'https://weather.tommymcd.com';
				break;
			case 'Sports App':
				block = 'Scores and schedule info for major US sports.';
				tech = [
					'ANGULAR',
					'HTML',
					'CSS',
					'BOOTSTRAP',
					'JS',
					'AJAX',
					'MYSPORTSFEEDS API',
				];
				link = 'https://sports.tommymcd.com';
				break;
			case 'Calculator App':
				block =
					'This is a simple calculator app that I created while teaching myself React.';
				tech = ['REACT', 'HTML', 'CSS', 'BOOTSTRAP', 'JS'];
				link = 'https://calculator.tommymcd.com';
				break;
			case 'Twitch API Tutorial':
				block = 'School project to teach the use of an API.';
				tech = ['HTML', 'CSS', 'BOOTSTRAP', 'JS', 'AJAX', 'TWITCH API'];
				link = 'https://twitch.tommymcd.com';
				break;
			default:
				block = 'Click a project button below!';
				break;
		}

		content = (
			<div
				style={{
					gridArea: 'content',
					placeSelf: 'center',
					margin: '2vh',
					alignContent: 'center',
				}}>
				<blockquote style={{ textAlign: 'center', fontSize: '1.4em' }}>
					{block}
				</blockquote>
				<div
					style={{
						marginTop: '3vh',
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'center',
					}}>
					{tech.map((element, idx) => {
						return (
							<Textbox key={idx} textbox={this.pillBox()} content={element} />
						);
					})}
				</div>
				<div style={{ marginTop: '5vh', textAlign: 'center' }}>
					{link.length > 0 && (
						<a href={link} style={this.linkStyle()}>
							SEE IT!
						</a>
					)}
				</div>
			</div>
		);

		return (
			<>
				<Accent corner='topLeft' len='5vw' margin='1vw' />
				<Accent corner='topRight' len='5vw' margin='1vw' />
				{content}
				<Accent corner='bottomLeft' len='5vw' margin='1vw' />
				<Accent corner='bottomRight' len='5vw' margin='1vw' />
			</>
		);
	};

	headerStyle = () => {
		return {
			color: '#F1FAEE',
			gridArea: 'header',
			textAlign: 'end',
			marginRight: '2vw',
			marginTop: '1vw',
			fontStyle: 'italic',
		};
	};

	linkStyle = () => {
		return {
			width: '50%',
			height: '6vh',
			backgroundColor: '#457b9d',
			color: '#F1FAEE',
			fontSize: '1.2em',
			fontStyle: 'italic',
			padding: '2vh 10vw',
			border: '1px solid #F1FAEE',
		};
	};

	render() {
		return (
			<>
				<Mobile>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
						}}>
						<div style={{ height: '50vh' }}>
							<h3
								style={{
									...this.headerStyle(),
									...{ marginTop: '0' },
								}}>
								{this.state.projectTitle}
							</h3>
							<Textbox
								textbox={this.textBox()}
								content={this.mainContent(this.state.projectTitle)}
							/>
						</div>
						<div
							style={{
								display: 'flex',
								flexWrap: 'wrap',
								justifyContent: 'center',
								marginTop: '3vh',
							}}>
							<Textbox
								textbox={this.selectBox()}
								content={this.selectContent('dungeons')}
								onClick={() =>
									this.setState({ projectTitle: 'Dungeons of Capstonia' })
								}
							/>
							<Textbox
								textbox={this.selectBox()}
								content={this.selectContent('twitch')}
								onClick={() =>
									this.setState({ projectTitle: 'Twitch API Tutorial' })
								}
							/>
							<Textbox
								textbox={this.selectBox()}
								content={this.selectContent('weather')}
								onClick={() => this.setState({ projectTitle: 'Weather App' })}
							/>
							<Textbox
								textbox={this.selectBox()}
								content={this.selectContent('calculator')}
								onClick={() =>
									this.setState({ projectTitle: 'Calculator App' })
								}
							/>
							<Textbox
								textbox={this.selectBox()}
								content={this.selectContent('sports')}
								onClick={() => this.setState({ projectTitle: 'Sports App' })}
							/>
						</div>
					</div>
				</Mobile>
				<Default>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}>
						<div style={{ maxWidth: '1000px' }}>
							<h3
								style={{
									...this.headerStyle(),
									...{ marginTop: '0' },
								}}>
								{this.state.projectTitle}
							</h3>
							<Textbox
								textbox={this.textBox()}
								content={this.mainContent(this.state.projectTitle)}
							/>
						</div>
						<div
							style={{
								display: 'flex',
								flexWrap: 'wrap',
								justifyContent: 'center',
								marginTop: '1vh',
								width: '90vw',
							}}>
							<Textbox
								textbox={this.selectBox()}
								content={this.selectContent('dungeons')}
								onClick={() =>
									this.setState({ projectTitle: 'Dungeons of Capstonia' })
								}
							/>
							<Textbox
								textbox={this.selectBox()}
								content={this.selectContent('twitch')}
								onClick={() =>
									this.setState({ projectTitle: 'Twitch API Tutorial' })
								}
							/>
							<Textbox
								textbox={this.selectBox()}
								content={this.selectContent('weather')}
								onClick={() => this.setState({ projectTitle: 'Weather App' })}
							/>
							<Textbox
								textbox={this.selectBox()}
								content={this.selectContent('calculator')}
								onClick={() =>
									this.setState({ projectTitle: 'Calculator App' })
								}
							/>
							<Textbox
								textbox={this.selectBox()}
								content={this.selectContent('sports')}
								onClick={() => this.setState({ projectTitle: 'Sports App' })}
							/>
						</div>
					</div>
				</Default>
			</>
		);
	}
}

export default Projects;
