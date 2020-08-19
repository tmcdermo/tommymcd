/** @format */

import React, { Component } from 'react';
import { Desktop, Tablet, Mobile, Default } from './Layout/Responsive';
import SelfPic from './SelfPic';
import TextBox from './TextBox';
import Accent from './Accent';

export class IntroBox extends Component {
	introBoxStyle = () => {
		return {
			height: '90vh',
			width: '90vw',
			display: 'grid',
			justifyItems: 'center',
			gridTemplateRows: '1fr 20vw 20vw 2fr 1fr',
			gridTemplateColumns: '90vw',
		};
	};

	biggerIntro = () => {
		return {
			gridTemplateRows: '1fr 154px 154px 2fr 1fr',
		};
	};

	textbox = () => {
		return {
			backgroundColor: '#1D3557',
			color: '#F1FAEE',
			width: '90vw',
			maxHeight: '470px',
			border: '5px solid #A8DADC',
			borderRadius: '2%',
			gridRow: 'span 2 / -2',
			gridColumn: '1',
			zIndex: '1',
			display: 'grid',
			gridTemplateRows: 'repeat(3, 1fr)',
			gridTemplateColumns: 'repeat(3, 1fr)',
			gridTemplateAreas:
				"'topLeft topMid topRight' '. content .' 'botLeft content botRight'",
		};
	};

	biggerTextbox = () => {
		return {
			width: '616px',
		};
	};

	contentStyle = () => {
		return {
			fontSize: '1.5em',
			textAlign: 'center',
			gridArea: 'content',
		};
	};

	content = (
		<>
			<Accent corner='topLeft' len='5vh' margin='1vw' />
			<span style={this.contentStyle()}>
				Web Design
				<br />&<br />
				Software Development
			</span>
			<Accent corner='bottomRight' len='5vh' margin='1vw' />
		</>
	);

	biggerContent = (
		<>
			<Accent corner='topLeft' len='5vh' margin='1vw' />
			<span
				style={{
					...this.contentStyle(),
					...{ fontSize: '1.7em', alignSelf: 'start' },
				}}>
				Web Design
				<br />&<br />
				Software Development
			</span>
			<Accent corner='bottomRight' len='5vh' margin='1vw' />
		</>
	);

	render() {
		return (
			<div>
				<Mobile>
					<div id='introbox' style={this.introBoxStyle()}>
						<SelfPic
							id='selfPic'
							width='40vw'
							gridRowPos='2 / 4'
							gridColPos='1'
							zIndex='5'
						/>
						<TextBox
							id='introTextBox'
							content={this.content}
							textbox={this.textbox()}
						/>
					</div>
				</Mobile>
				<Default>
					<div
						id='introbox'
						style={{ ...this.introBoxStyle(), ...this.biggerIntro() }}>
						<SelfPic
							id='selfPic'
							width='308px'
							gridRowPos='2 / 4'
							gridColPos='1'
							zIndex='5'
						/>
						<TextBox
							id='introTextBox'
							content={this.biggerContent}
							textbox={{
								...this.textbox(),
								...{
									width: '616px',
									minHeight: '350px',
									gridTemplateRows: '190px 1fr 1fr',
									gridTemplateColumns: '1fr 308px 1fr',
								},
							}}
						/>
					</div>
				</Default>
			</div>
		);
	}
}

export default IntroBox;
