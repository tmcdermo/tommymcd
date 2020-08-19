/** @format */

import React, { Component } from 'react';

export class SelfPic extends Component {
	picStyle = () => {
		return {
			border: '5px solid #A8DADC',
			borderRadius: '50%',
			width: this.props.width,
			gridRow: this.props.gridRowPos,
			gridColumn: this.props.gridColPos,
			zIndex: this.props.zIndex,
		};
	};

	render() {
		return (
			<img src='./img/tommy_face.jpg' alt='TommyPic' style={this.picStyle()} />
		);
	}
}

export default SelfPic;
