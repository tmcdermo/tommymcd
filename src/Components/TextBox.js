/** @format */

import React, { Component } from 'react';
import Accent from './Accent';

export class TextBox extends Component {
	textbox = () => {
		return {
			backgroundColor: '#1D3557',
			color: '#F1FAEE',
			width: this.props.width,
			height: this.props.height,
			border: '5px solid #A8DADC',
			borderRadius: '2%',
			gridRow: this.props.gridRowPos,
			gridColumn: this.props.gridColPos,
			zIndex: this.props.zIndex,
		};
	};
	render() {
		return (
			<span className='textbox' style={this.props.textbox}>
				{this.props.content}
			</span>
		);
	}
}

export default TextBox;
